import { ProductEntity } from "../entities/product.entity";
import CategoriaRepository from "../repositories/categoria.repository";
import ProductRepository from "../repositories/product.repository";
import IProductService from "../interfaces/product_interfaces/product_service.interface";
import {
    CreateProductDto,
    ResponseCreateProductDto,
} from "../dtos/product_dtos/create_product.dto";
import {
    ResponseGetProductDto,
    ResponseGetProductsDto,
    FindFilteredProductsPayloadDto,
    ResponseFindFilteredProductsDto,
    ResponseFindProductsToDownloadDto,
} from "../dtos/product_dtos/get_products.dto";
import {
    PayloadUpdateProduct,
    ResponseUpdateProduct,
} from "../dtos/product_dtos/update_product.dto";
import { ResponseDeactivateProductDto } from "../dtos/product_dtos/delete_product.dto";
import { generateUUID } from "../utils/helpers/generate_uuid.util";
import NOW from "../globals/helpers/global_time_constants.util";
import { ServerError } from "../errors/server_errors/five_xx.error";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { BaseAppError } from "../errors/global_error.error";
import ProdutoValidator from "../validators/produto.validator";

class ProductService implements IProductService {
    constructor(
        private productRepository: ProductRepository,
        private categoriaRepository: CategoriaRepository,
        private productValidator: ProdutoValidator
    ) {}

    async createProduct(
        productPayload: CreateProductDto
    ): Promise<Either<BaseAppError, ResponseCreateProductDto>> {
        productPayload.data_de_cadastro =
            productPayload.data_de_cadastro ?? NOW;

        const productData = await this.productRepository.createProduct({
            id: generateUUID(),
            ativo: true,
            ...productPayload,
        });
        const categoriaData = await this.categoriaRepository.getCategoriaByName(
            productPayload.categoria.nome
        );
        if (productData.isLeft()) {
            // validate properly
            //
            return left(new ServerError("500", true, "internal server error"));
        } else {
            let data: ResponseCreateProductDto = productData.value;
            if (categoriaData.isLeft()){
                return left(new ServerError("500", true, "internal server errror"))
            }
            data.categoria = categoriaData.value;

            return right(data);
        }
    }

    async getProducts(
        page: number,
        amount: number
    ): Promise<Either<BaseAppError, ResponseGetProductsDto>> {
        return right({} as ResponseGetProductsDto);
    }

    async findProductById(
        id: string
    ): Promise<Either<BaseAppError, ResponseGetProductDto>> {
        return right({} as ResponseGetProductDto);
    }
    async findProductsByFilter(
        amount: number,
        includeParams: FindFilteredProductsPayloadDto
    ): Promise<Either<BaseAppError, ResponseFindFilteredProductsDto>> {
        return right({} as ResponseFindFilteredProductsDto);
    }
    async findProductsToDownload<T extends number | number[]>(
        amount: number,
        includeParamsPayload: FindFilteredProductsPayloadDto
    ): Promise<
        Either<
            BaseAppError,
            ResponseFindProductsToDownloadDto<ProductEntity, T>
        >
    > {
        return right({} as ResponseFindProductsToDownloadDto<ProductEntity, T>);
    }

    async updateProduct(
        product: PayloadUpdateProduct
    ): Promise<Either<BaseAppError, ResponseUpdateProduct>> {
        return right({} as ResponseUpdateProduct);
    }
    async deleteProduct(id: string): Promise<Either<BaseAppError, null>> {
        return right(null);
    }
    async deactivateProduct(
        id: string
    ): Promise<Either<BaseAppError, ResponseDeactivateProductDto>> {
        return right({} as ResponseDeactivateProductDto);
    }
}

export default ProductService;