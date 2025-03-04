import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type ResponseArchivedDetalhamentoAuditoriaDto = BaseDefaultMessage &
    Omit<DetalhamentoAuditoriaEntity, "id">;

export { ResponseArchivedDetalhamentoAuditoriaDto };