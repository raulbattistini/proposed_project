import { ICategoriaValidator } from "../interfaces/category_interfaces/categoria_validatoria.validator";
import CategoriaSchema from "../utils/schemas/categoria.schema";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { ValidationError } from "../errors/client_errors/four_xx.error";
import BaseValidator from "./base.validator";

class CategoriaValidator extends BaseValidator implements ICategoriaValidator {
   constructor() {
      super();
   }
   validatePayload(payload: unknown): Either<ValidationError, void> {
      const result = CategoriaSchema.safeParse(payload);
      if (!result.success) {
         return left(
            new ValidationError(
               "400",
               result.error.errors.map((err) => err.message).join(", "),
            ),
         );
      }
      return right(undefined);
   }
   validateNome(payload: string): Either<ValidationError, void> {
      const result = CategoriaSchema.shape.nome.safeParse(payload);
      if (!result.success) {
         return left(
            new ValidationError(
               "400",
               result.error.errors.map((err) => err.message).join(", "),
            ),
         );
      }
      return right(undefined);
   }
}

export default CategoriaValidator;
