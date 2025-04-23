import { z } from "zod";
import {
   SERVER_ERRORS_STATUS_CODES,
   CLIENT_ERRORS_STATUS_CODES,
   REDIRECT_MESSAGE_STATUS_CODES,
   SUCCESS_MESSAGE_STATUS_CODES,
} from "../../globals/errors/status_codes_errors.global";

const SERVER_SIDE_ERRORS_ENUM = z.enum(SERVER_ERRORS_STATUS_CODES);
const CLIENT_SIDE_ERRORS_ENUM = z.enum(CLIENT_ERRORS_STATUS_CODES);
const REDIRECT_MESSAGE_ENUM = z.enum(REDIRECT_MESSAGE_STATUS_CODES);
const SUCCESS_MESSAGE_ENUM = z.enum(SUCCESS_MESSAGE_STATUS_CODES);

export type ServerSideErrorsEnum = z.infer<typeof SERVER_SIDE_ERRORS_ENUM>;
export type ClientSideErrorsEnum = z.infer<typeof CLIENT_SIDE_ERRORS_ENUM>;
export type RedirectMessageEnum = z.infer<typeof REDIRECT_MESSAGE_ENUM>;
export type SuccessMessageEnum = z.infer<typeof SUCCESS_MESSAGE_ENUM>;

export default {
   SERVER_SIDE_ERRORS_ENUM,
   CLIENT_SIDE_ERRORS_ENUM,
   REDIRECT_MESSAGE_ENUM,
   SUCCESS_MESSAGE_ENUM,
};

// precisa criar um arquivo por tipo de erro nessa abordagem (um pra server side error, um pra client side error, um pra caso de sucesso etc) por causa de nomenclatura e export -- o default para constantes em maisculas e o tipo tambem maiusculas (convencao) para evitar conflito de imports e nomes (ambos exports normais e em maisculas para tipos e constantes)
