import Categoria from "../../entities/categoria.entity";
import { RepositoryError } from "../../globals/errors/global_repository_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

interface ICategoriaRepository {
    getCategorias(): Promise<Either<RepositoryError, Categoria[]>>;
    getCategoriaById(id: string): Promise<Either<RepositoryError, Categoria>>;
    getCategoriaByName(name: string): Promise<Either<RepositoryError, Categoria>>;
    createCategoria(
        payload: Omit<Categoria, "id">
    ): Promise<Either<RepositoryError, Categoria>>;
    updateCategoria(payload: Categoria): Promise<Either<RepositoryError, void>>;
    deleteCategoria(id: string): Promise<Either<RepositoryError, void>>;
}

export default ICategoriaRepository;