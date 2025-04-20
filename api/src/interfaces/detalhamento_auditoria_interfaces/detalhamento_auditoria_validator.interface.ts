import { BaseAppError } from "../../errors/global_error.error";
import { Either } from "../../globals/errors/left_right_either.error";
import { IBaseValidator } from "../general_interfaces/base_validator.interface";

export interface IDetalhamentoAuditoriaValidator extends IBaseValidator {
   validatePayload(payload: unknown): Either<BaseAppError, void>;
}
