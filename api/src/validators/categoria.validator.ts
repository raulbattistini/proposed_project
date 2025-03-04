import { ICategoriaValidator } from "../interfaces/category_interfaces/categoria_validatoria.validator";
import CategoriaSchema from "../utils/schemas/categoria.schema";
import ZodErrorStatusEnum from "../enums/errors_enums/errors_status.enum";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { BaseAppError } from "../errors/global_error.error";

class CategoriaValidator implements ICategoriaValidator {
    constructor() {}
    validatePayload(payload: unknown): Either<BaseAppError, void> {
        const result = CategoriaSchema.safeParse(payload);
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

export default CategoriaValidator;