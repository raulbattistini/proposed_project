// aquilo que esta chamado de "ProductRepositoryInterface" pertence aqui
// o ProductRepositoryInterface de fato seria apenas o acesso ao banco de dados
// rever os DTOs e nomenclaturas para desacoplar regra de negócio de implementação

import {
    CreateProductDto,
    ResponseCreateProductDto,
} from "../../dtos/product_dtos/create_product.dto";
import {
    ResponseGetProductDto,
    ResponseGetProductsDto,
    FindFilteredProductsPayloadDto,
    ResponseFindFilteredProductsDto,
    ResponseFindProductsToDownloadDto,
} from "../../dtos/product_dtos/get_products.dto";
import {
    PayloadUpdateProduct,
    ResponseUpdateProduct,
} from "../../dtos/product_dtos/update_product.dto";
import { ResponseDeactivateProductDto } from "../../dtos/product_dtos/delete_product.dto";
import { ProductEntity } from "../../entities/product.entity";
import { Either } from "../../globals/errors/left_right_either.error";
import { BaseAppError } from "../../errors/global_error.error";

interface IProductService {
    createProduct: (
        productDto: CreateProductDto
    ) => Promise<Either<BaseAppError, ResponseCreateProductDto>>;
    getProducts: (
        page: number,
        amount: number
    ) => Promise<Either<BaseAppError, ResponseGetProductsDto>>;
    findProductById: (
        id: string
    ) => Promise<Either<BaseAppError, ResponseGetProductDto>>;
    findProductsByFilter: (
        amount: number,
        includeParams: FindFilteredProductsPayloadDto
    ) => Promise<Either<BaseAppError, ResponseFindFilteredProductsDto>>;
    findProductsToDownload: <T extends number | number[]>(
        amount: number,
        includeParamsPayload: FindFilteredProductsPayloadDto
    ) => Promise<
        Either<
            BaseAppError,
            ResponseFindProductsToDownloadDto<ProductEntity, T>
        >
    >;
    updateProduct: (
        payload: PayloadUpdateProduct
    ) => Promise<Either<BaseAppError, ResponseUpdateProduct>>;
    deleteProduct: (id: string) => Promise<Either<BaseAppError, null>>;
    deactivateProduct: (
        id: string
    ) => Promise<Either<BaseAppError, ResponseDeactivateProductDto>>;
}

export default IProductService;