import { BaseMessageGet, BaseMessageGetOne } from "../global_get.dto";
import { AuditoriaEntity } from "../../entities/auditoria.entity";

type ResponseGetAuditorias = BaseMessageGet<AuditoriaEntity>;

type ResponseFindAuditoriaById = BaseMessageGetOne<AuditoriaEntity>;

type GetUserPreviousAudictionsDto = Omit<
   AuditoriaEntity[],
   "detalhamento_auditoria"
>;

export {
   ResponseGetAuditorias,
   ResponseFindAuditoriaById,
   GetUserPreviousAudictionsDto,
};
