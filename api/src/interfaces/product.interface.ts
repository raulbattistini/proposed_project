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
import { ProductEntity } from "../entities/product.entity";

interface ProductRepositoryInterface {
    createProduct: (
        productDto: CreateProductDto
    ) => Promise<ResponseCreateProductDto>;
    getProducts: (
        page: number,
        amount: number
    ) => Promise<ResponseGetProductsDto>;
    findProductById: (id: string) => Promise<ResponseGetProductDto>;
    findProductsByFilter: (
        amount: number,
        includeParams: FindFilteredProductsPayloadDto
    ) => Promise<ResponseFindFilteredProductsDto>;
    findProductsToDownload: <T extends number | number[]>(
        amount: number,
        includeParamsPayload: FindFilteredProductsPayloadDto
    ) => Promise<ResponseFindProductsToDownloadDto<ProductEntity, T>>;
    updateProduct: (
        payload: PayloadUpdateProduct
    ) => Promise<ResponseUpdateProduct>;
    deleteProduct: (id: string) => Promise<void>;
    deactivateProduct: (id: string) => Promise<ResponseDeactivateProductDto>;
}

export default ProductRepositoryInterface;