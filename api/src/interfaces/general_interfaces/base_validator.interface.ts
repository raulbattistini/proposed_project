import { ValidationError } from "../../errors/client_errors/four_xx.error";
import { Either } from "../../globals/errors/left_right_either.error";

export interface IBaseValidator {
   validateUUID(id: string): Either<ValidationError, null>;
   validateUUIDv4(uuid: string): Either<ValidationError, null>;
   validateString(value: string): Either<ValidationError, null>;
   validatePageAndAmount(
      page: number,
      amount: number,
   ): Either<ValidationError, null>;
}
