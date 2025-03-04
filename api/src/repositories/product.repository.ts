import { DataSource, Repository } from "typeorm";
import { ProductEntity } from "../entities/product.entity";
import IProductRepository from "../interfaces/product_interfaces/product_repository.interface";
import { Either, left } from "../globals/errors/left_right_either.error";
import Categoria from "../entities/categoria.entity";
import { RepositoryError } from "../globals/errors/global_repository_error.error";

class ProductRepository implements IProductRepository {
    private repository: Repository<ProductEntity>;
    constructor(
        private readonly connection: DataSource
    ) {
        this.repository = this.connection.getRepository(ProductEntity);
    }

    async getProductById(
        id: string
    ): Promise<Either<RepositoryError, ProductEntity>> {
        return left(new RepositoryError("500"));
    }
    async getProducts(): Promise<Either<RepositoryError, ProductEntity[]>> {
        return left(new RepositoryError("404"));
    }
    async createProduct(
        payload: Omit<ProductEntity, "categoria"> & {
            categoria: Pick<Categoria, "nome">;
        }
    ): Promise<Either<RepositoryError, ProductEntity>> {
        return left(new RepositoryError("500"));
    }
    async updateProduct(
        payload: ProductEntity
    ): Promise<Either<RepositoryError, null>> {
        return left(new RepositoryError("500"));
    }
    async deleteProduct(id: string): Promise<Either<RepositoryError, null>> {
        return left(new RepositoryError("500"));
    }
}

export default ProductRepository;