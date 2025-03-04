import { DataSource, Repository } from "typeorm";
import Categoria from "../entities/categoria.entity";
import CategoryRepositoryInterface from "../interfaces/category_interfaces/categoria_repository.interface";
import {
    PayloadCreateCategoria,
    ResponseCreateCategoria,
} from "../dtos/category_dtos/create_categoria.dto";
import { RepositoryError } from "../globals/errors/global_repository_error.error";
import { Either, right } from "../globals/errors/left_right_either.error";

class CategoriaRepository implements CategoryRepositoryInterface {
    private repository: Repository<Categoria>;
    constructor(private readonly connection: DataSource) {
        this.repository = this.connection.getRepository(Categoria);
    }

    async getCategoriaById(
        id: string
    ): Promise<Either<RepositoryError, Categoria>> {
        return right(new Categoria());
    }

    async getCategoriaByName(
        id: string
    ): Promise<Either<RepositoryError, Categoria>> {
        return right(new Categoria());
    }

    async getCategorias(): Promise<Either<RepositoryError, Categoria[]>> {
        return right([]);
    }

    async createCategoria(
        payload: PayloadCreateCategoria
    ): Promise<Either<RepositoryError, ResponseCreateCategoria>> {
        return right({} as ResponseCreateCategoria);
    }

    async updateCategoria(
        payload: Categoria
    ): Promise<Either<RepositoryError, void>> {
        return right(undefined);
    }

    async deleteCategoria(id: string): Promise<Either<RepositoryError, void>> {
        return right(undefined);
    }
}

export default CategoriaRepository;