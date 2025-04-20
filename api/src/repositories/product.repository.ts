import { DataSource, Repository } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import IProductRepository from "../interfaces/product_interfaces/product_repository.interface";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import Categoria from "../entities/categoria.entity";
import { RepositoryError } from "../globals/errors/global_repository_error.error";

class ProductRepository implements IProductRepository {
   private repository: Repository<ProductEntity>;
   constructor(private readonly connection: DataSource) {
      this.repository = this.connection.getRepository(ProductEntity);
   }

   async getProductById(
      id: string,
   ): Promise<Either<RepositoryError, ProductEntity>> {
      try {
         const productData = await this.repository.findOne({ where: { id } });
         if (!productData || !productData.ativo) {
            return left(new RepositoryError("404"));
         }
         return right(productData);
      } catch (error) {
         return left(new RepositoryError("500"));
      }
   }

   async getProducts(): Promise<Either<RepositoryError, ProductEntity[]>> {
      try {
         const productData = await this.repository.find({
            where: { ativo: true },
         });
         if (!productData) {
            return left(new RepositoryError("404"));
         }
         return right(productData);
      } catch (error) {
         return left(new RepositoryError("500"));
      }
   }
   async createProduct(
      payload: Omit<ProductEntity, "categoria"> & {
         categoria: Pick<Categoria, "nome">;
      },
   ): Promise<Either<RepositoryError, ProductEntity>> {
      try {
         const { categoria, ...rest } = payload;
         const categoriaData = await this.connection
            .getRepository(Categoria)
            .findOne({ where: { nome: categoria.nome } });
         if (!categoriaData) {
            return left(new RepositoryError("404"));
         }
         const productData = await this.repository.save({
            ...rest,
            categoria: categoriaData,
         });
         if (!productData) {
            return left(new RepositoryError("500"));
         }
         return right(productData);
      } catch (error) {
         return left(new RepositoryError("500"));
      }
   }
   async updateProduct(
      payload: Omit<ProductEntity, "categoria"> & {
         categoria: Pick<Categoria, "nome">;
      },
   ): Promise<Either<RepositoryError, null>> {
      try {
         const { id, ...rest } = payload;
         const productData = await this.repository.findOne({ where: { id } });
         if (!productData) {
            return left(new RepositoryError("404"));
         }
         const categoriaData = await this.connection
            .getRepository(Categoria)
            .findOne({ where: { nome: rest.categoria.nome } });
         if (!categoriaData) {
            return left(new RepositoryError("404"));
         }
         await this.repository.update(id, {
            ...rest,
            categoria: categoriaData,
         });
         return right(null);
      } catch (error) {
         return left(new RepositoryError("500"));
      }
   }
   async deactivateProduct(id: string): Promise<Either<RepositoryError, null>> {
      try {
         const productData = await this.repository.findOne({ where: { id } });
         if (!productData) {
            return left(new RepositoryError("404"));
         }
         await this.repository.update(id, { ativo: false });
         return right(null);
      } catch (error) {
         return left(new RepositoryError("500"));
      }
   }
   async removeProduct(id: string): Promise<Either<RepositoryError, null>> {
      try {
         const productData = await this.repository.findOne({ where: { id } });
         if (!productData) {
            return left(new RepositoryError("404"));
         }
         await this.repository.remove(productData);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("500"));
      }
   }
}

export default ProductRepository;
