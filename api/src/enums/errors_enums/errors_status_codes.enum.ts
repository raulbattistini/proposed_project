import { z } from "zod";
import { 
	SERVER_ERRORS_STATUS_CODES, 
	CLIENT_ERRORS_STATUS_CODES, 
	REDIRECT_MESSAGE_STATUS_CODES,
	SUCCESS_MESSAGE_STATUS_CODES,
} from "../../globals/errors/status_codes_errors.global";

const ServerSideErrorsEnum = z.enum(SERVER_ERRORS_STATUS_CODES)
const ClientSideErrorsEnum = z.enum(CLIENT_ERRORS_STATUS_CODES)
const RedirectMessageEnum = z.enum(REDIRECT_MESSAGE_STATUS_CODES)
const SuccessMessageEnum = z.enum(SUCCESS_MESSAGE_STATUS_CODES)

export type ServerSideErrorsEnum = z.infer<typeof ServerSideErrorsEnum>
export type ClientSideErrorsEnum = z.infer<typeof ClientSideErrorsEnum>
export type RedirectMessageEnum = z.infer<typeof RedirectMessageEnum>
export type SuccessMessageEnum = z.infer<typeof SuccessMessageEnum>

export default {
	ServerSideErrorsEnum,
	ClientSideErrorsEnum,
	RedirectMessageEnum,
	SuccessMessageEnum,
};

// precisa criar um arquivo por tipo de erro nessa abordagem (um pra server side error, um pra client side error, um pra caso de sucesso etc) por causa de nomenclatura e export -- o default para constantes em maisculas e o tipo tambem maiusculas (convencao) para evitar conflito de imports e nomes (ambos exports normais e em maisculas para tipos e constantes)
