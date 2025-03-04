import {
    BaseDefaultMessage,
    BaseMessageGet,
    BaseMessageGetOne,
} from "../global_get.dto";
import { AuditoriaEntity } from "../../entities/auditoria.entity";

type ResponseGetAuditorias = BaseMessageGet<AuditoriaEntity>;

type ResponseFindAuditoriaById = BaseMessageGetOne<AuditoriaEntity>;

export { ResponseGetAuditorias, ResponseFindAuditoriaById };