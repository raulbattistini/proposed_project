import { BaseAppError } from "../../errors/global_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

export interface IProductValidator {
    validatePayload(payload: unknown): Either<BaseAppError, void>;
}