import ZodErrorStatusEnum from "../enums/errors_enums/errors_status.enum";
import { BaseAppError } from "../errors/global_error.error";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { IUsuarioValidator } from "../interfaces/usuario_interfaces/usuario_validator.interface";
import UserSchema from "../utils/schemas/user.schema";
import BaseValidator from "./base.validator";

class UsuarioValidator extends BaseValidator implements IUsuarioValidator {
   constructor() {
      super();
   }

   validatePayload(payload: unknown): Either<BaseAppError, void> {
      const result = UserSchema.safeParse(payload);

      if (!result.success) {
         return left(
            new BaseAppError(
               "400",
               ZodErrorStatusEnum.Values.error,
               false,
               result.error.errors.map((err) => err.message).join(", "),
            ),
         );
      }

      return right(undefined);
   }
}

export default UsuarioValidator;
