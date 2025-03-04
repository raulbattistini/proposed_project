import { IAuditoriaValidator } from "../interfaces/auditory_interfaces/auditoria_validator.interface";
import AuditoriaSchema from "../utils/schemas/auditoria.schema";
import ZodErrorStatusEnum from "../enums/errors_enums/errors_status.enum";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { BaseAppError } from "../errors/global_error.error";

class AuditoriaValidator implements IAuditoriaValidator {
    constructor() {}
    validatePayload(payload: unknown): Either<BaseAppError, void> {
        const result = AuditoriaSchema.safeParse(payload);

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

export default AuditoriaValidator;