import { IDetalhamentoAuditoriaValidator } from "../interfaces/detalhamento_auditoria_interfaces/detalhamento_auditoria_validator.interface";
import DetalhamentoAuditoriaSchema from "../utils/schemas/detalhamento_auditoria.schema";
import ZodErrorStatusEnum from "../enums/errors_enums/errors_status.enum";
import { Either, left, right } from "../globals/errors/left_right_either.error";
import { BaseAppError } from "../errors/global_error.error";
import BaseValidator from "./base.validator";

class DetalhamentoAuditoriaValidator
   extends BaseValidator
   implements IDetalhamentoAuditoriaValidator
{
   constructor() {
      super();
   }
   validatePayload(payload: unknown): Either<BaseAppError, void> {
      const result = DetalhamentoAuditoriaSchema.safeParse(payload);
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

export default DetalhamentoAuditoriaValidator;
