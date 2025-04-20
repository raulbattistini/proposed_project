// aquilo que esta chamado de "ProductRepositoryInterface" pertence aqui
// o ProductRepositoryInterface de fato seria apenas o acesso ao banco de dados
// rever os DTOs e nomenclaturas para desacoplar regra de negócio de implementação
import Categoria from "../../entities/categoria.entity";
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
import { PayloadUpdateProductDto } from "../../dtos/product_dtos/update_product.dto";
import { ProductEntity } from "../../entities/product.entity";
import { Either } from "../../globals/errors/left_right_either.error";
import { BaseAppError } from "../../errors/global_error.error";

interface IProductService {
   createProduct: (
      productDto: CreateProductDto,
   ) => Promise<Either<BaseAppError, ResponseCreateProductDto>>;
   getProducts: (
      page: number,
      amount: number,
   ) => Promise<Either<BaseAppError, ResponseGetProductsDto>>;
   findProductById: (
      id: string,
   ) => Promise<Either<BaseAppError, ResponseGetProductDto>>;
   findProductsByFilter: (
      amount: number,
      includeParams: FindFilteredProductsPayloadDto,
   ) => Promise<Either<BaseAppError, ResponseFindFilteredProductsDto>>;
   findProductsToDownload: (
      amount: number,
      page: number,
      includeParamsPayload: FindFilteredProductsPayloadDto,
   ) => Promise<
      Either<BaseAppError, ResponseFindProductsToDownloadDto<ProductEntity>>
   >;
   updateProduct: (
      payload: PayloadUpdateProductDto,
   ) => Promise<Either<BaseAppError, null>>;
   deleteProduct: (id: string) => Promise<Either<BaseAppError, null>>;
   deactivateProduct: (id: string) => Promise<Either<BaseAppError, null>>;
}

export default IProductService;
