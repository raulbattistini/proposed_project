import {
   FindFilteredProductsPayloadDto,
   ResponseFindFilteredProductsDto,
} from "../../dtos/product_dtos/get_products.dto";
import { ProductEntity } from "../../entities/product.entity";
import { BaseAppError } from "../../errors/global_error.error";
import {
   Either,
   left,
   right,
} from "../../globals/errors/left_right_either.error";

export default function filterProducts(
   products: ProductEntity[],
   filterParams: FindFilteredProductsPayloadDto,
): Either<BaseAppError, ResponseFindFilteredProductsDto> {
   try {
      let filteredProducts: ProductEntity[] = [];
      for (let product of products) {
         const isIncluded = filterParams.hasOwnProperty(product.id);
         const isExcluded =
            (filterParams &&
               (filterParams.ativo
                  ? filterParams.ativo === product.ativo
                  : false)) ||
            (filterParams?.categoria
               ? filterParams.categoria === product.categoria
               : false) ||
            (filterParams?.sku ? filterParams.sku === product.sku : false) ||
            (filterParams?.name ? filterParams.name === product.name : false) ||
            (filterParams?.valor_de_custo
               ? filterParams.valor_de_custo === product.valor_de_custo
               : false) ||
            (filterParams?.icms ? filterParams.icms === product.icms : false) ||
            (filterParams?.valor_de_venda
               ? filterParams.valor_de_venda === product.valor_de_venda
               : false) ||
            (filterParams?.data_de_cadastro
               ? filterParams.data_de_cadastro === product.data_de_cadastro
               : false);
         if (isIncluded && !isExcluded) {
            filteredProducts.push(product);
         }
      }
      const response: ResponseFindFilteredProductsDto = {
         data: filteredProducts,
         pageNumber: 1,
         pageSize: filteredProducts.length,
         totalItems: filteredProducts.length,
      };
      return right(response);
   } catch (error) {
      if (error instanceof BaseAppError) {
         return left(error);
      }
      return left(
         new BaseAppError(
            "500",
            "error",
            true,
            "Error filtering products params",
         ),
      );
   }
}
