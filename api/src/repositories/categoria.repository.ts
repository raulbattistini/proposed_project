import { DataSource, Repository } from "typeorm";
import Categoria from "../entities/categoria.entity";
import CategoryRepositoryInterface from "../interfaces/category_interfaces/categoria_repository.interface";
import {
   PayloadCreateCategoria,
   ResponseCreateCategoria,
} from "../dtos/category_dtos/create_categoria.dto";
import { RepositoryError } from "../globals/errors/global_repository_error.error";
import { Either, right, left } from "../globals/errors/left_right_either.error";

class CategoriaRepository implements CategoryRepositoryInterface {
   private repository: Repository<Categoria>;
   constructor(private readonly connection: DataSource) {
      this.repository = this.connection.getRepository(Categoria);
   }

   async getCategoriaById(
      id: string,
   ): Promise<Either<RepositoryError, Categoria>> {
      try {
         const categoria = await this.repository.findOneBy({ id });
         if (!categoria || !categoria.ativo) {
            return left(new RepositoryError("Categoria not found"));
         }
         return right(categoria);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }

   async getCategoriaByName(
      nome: Categoria["nome"],
   ): Promise<Either<RepositoryError, Categoria>> {
      try {
         const categoria = await this.repository.findOneBy({ nome });
         if (!categoria || !categoria.ativo) {
            return left(new RepositoryError("Categoria not found"));
         }
         return right(categoria);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }

   async getCategorias(): Promise<Either<RepositoryError, Categoria[]>> {
      try {
         const categorias = await this.repository.find();
         if (!categorias || categorias.length === 0) {
            return left(new RepositoryError("No categories found"));
         }
         return right(categorias);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }

   async createCategoria(
      payload: PayloadCreateCategoria,
   ): Promise<Either<RepositoryError, ResponseCreateCategoria>> {
      try {
         const categoria = this.repository.create(payload);
         const savedCategoria = await this.repository.save(categoria);
         return right(savedCategoria);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }

   async updateCategoria(
      payload: Categoria,
   ): Promise<Either<RepositoryError, void>> {
      try {
         const categoria = await this.repository.findOne({
            where: { id: payload.id },
         });
         if (!categoria) {
            return left(new RepositoryError("Categoria not found"));
         }
         await this.repository.update(payload.id, payload);
         return right(undefined);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }
   async deactivateCategoria(
      id: string,
   ): Promise<Either<RepositoryError, void>> {
      try {
         const categoria = await this.repository.findOne({ where: { id } });
         if (!categoria) {
            return left(new RepositoryError("Categoria not found"));
         }
         await this.repository.update(id, { ativo: false });
         return right(undefined);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }

   async deleteCategoria(id: string): Promise<Either<RepositoryError, void>> {
      try {
         const categoria = await this.repository.findOne({ where: { id } });
         if (!categoria) {
            return left(new RepositoryError("Categoria not found"));
         }
         await this.repository.delete(id);
         return right(undefined);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }
}

export default CategoriaRepository;
