import { ProductEntity } from "../../entities/product.entity";
import { BaseDefaultMessage } from "../global_get.dto";

interface MessageDeactivateProduct extends BaseDefaultMessage {
    message: string;
    status: boolean;
}

type ResponseDeactivateProductDto = Pick<
    ProductEntity,
    "ativo" | "name" | "id"
>;

export { ResponseDeactivateProductDto };