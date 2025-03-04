import {z} from "zod";
import { SERVER_ERRORS_STATUS_CODES } from "../../globals/errors/status_codes_errors.global";
import { Server } from "http";


const ServerSideErrorsEnum = z.enum(SERVER_ERRORS_STATUS_CODES)

export type ServerSideErrorsEnum = z.infer<typeof ServerSideErrorsEnum>

export default ServerSideErrorsEnum;

// precisa criar um arquivo por tipo de erro nessa abordagem (um pra server side error, um pra client side error, um pra caso de sucesso etc) por causa de nomenclatura e export -- o default para constantes em maisculas e o tipo tambem maiusculas (convencao) para evitar conflito de imports e nomes (ambos exports normais e em maisculas para tipos e constantes)