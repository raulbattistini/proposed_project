import ZodErrorStatusEnum from "../enums/errors_enums/errors_status.enum";
import { BaseAppError } from "../errors/global_error.error";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { IProductValidator } from "../interfaces/product_interfaces/produto_validator.interface";
import ProdutoSchema from "../utils/schemas/produto.schema";

class ProdutoValidator implements IProductValidator {
    constructor() {}
    validatePayload(payload: unknown): Either<BaseAppError, void> {
        const result = ProdutoSchema.safeParse(payload);
        if (!result.success) {
            return left(
                new BaseAppError(
                    "400",
                    ZodErrorStatusEnum.Values.error,
                    false,
                    result.error.errors.map((err) => err.message).join(", ")
                )
            );
        }
        return right(undefined);
    }
}

export default ProdutoValidator;