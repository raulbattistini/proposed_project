import Categoria from "../../entities/categoria.entity";
import { ProductEntity } from "../../entities/product.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type CreateProductDto = Omit<ProductEntity, "id" | "ativo" | "categoria"> & {
    categoria: Pick<Categoria, "nome">;
};

type CreateProductDtoFallback = {
    name: string;
    ativo: boolean;
    sku: string;
    categoria: string;
    valor_de_custo: number;
    icms: number;
    valor_de_venda: number;
    data_de_cadastro: Date;
    quantidade_em_estoque: number;
};

interface MessageCreateProduct extends BaseDefaultMessage {
    mensagem: string;
    status: boolean;
}

type ResponseCreateProductDto = 
    Omit<ProductEntity, "categoria"> & {
        categoria: Pick<Categoria, "nome" | "tipo" | "id">;
    };

export { CreateProductDto, CreateProductDtoFallback, ResponseCreateProductDto };