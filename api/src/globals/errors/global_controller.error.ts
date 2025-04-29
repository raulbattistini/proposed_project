import { z } from "zod";
import { BaseAppError } from "../../errors/global_error.error";
import SUCCESS_MESSAGE_STATUS_CODES from "../../enums/errors_enums/errors_status_codes.enum";
import CLIENT_ERRORS_STATUS_CODES from "../../enums/errors_enums/errors_status_codes.enum";
import SERVER_ERRORS_STATUS_CODES from "../../enums/errors_enums/errors_status_codes.enum";
import { ZodErrorStatusEnum } from "../../enums/errors_enums/errors_status.enum";

const SuccessStatusCodesValues =
   SUCCESS_MESSAGE_STATUS_CODES.SUCCESS_MESSAGE_ENUM.options;
const ClientStatusCodesValues =
   CLIENT_ERRORS_STATUS_CODES.CLIENT_SIDE_ERRORS_ENUM.options;
const ServerStatusCodesValues =
   SERVER_ERRORS_STATUS_CODES.SERVER_SIDE_ERRORS_ENUM.options;

const STATUS_CODE_ENUM = z.enum([
   ...SuccessStatusCodesValues,
   ...ClientStatusCodesValues,
   ...ServerStatusCodesValues,
]);
type StatusCodeEnum = z.infer<typeof STATUS_CODE_ENUM>;

export class ControllerError extends BaseAppError {
   constructor(
      message: string,
      statusCode: StatusCodeEnum,
      status: ZodErrorStatusEnum,
      isOperational: boolean,
   ) {
      super(statusCode, status, isOperational, message);
   }
}
