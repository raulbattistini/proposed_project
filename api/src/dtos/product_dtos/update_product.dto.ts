import Categoria from "../../entities/categoria.entity";
import { ProductEntity } from "../../entities/product.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type PayloadUpdateProduct = Omit<ProductEntity, "id" | "categoria"> & {
    categoria: Pick<Categoria, "nome">;
};

interface MessageUpdateProduct extends BaseDefaultMessage {
    message: string;
    status: boolean;
}

type ResponseUpdateProduct = BaseDefaultMessage & Omit<ProductEntity, "id">;

export { PayloadUpdateProduct, ResponseUpdateProduct };