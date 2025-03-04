import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type PayloadUpdateDetalhamentoAuditoriaDto = Omit<
    DetalhamentoAuditoriaEntity,
    "id"
>;

type ResponseUpdateDetalhamentoAuditoriaDto = BaseDefaultMessage &
    Omit<DetalhamentoAuditoriaEntity, "id">;

export {
    PayloadUpdateDetalhamentoAuditoriaDto,
    ResponseUpdateDetalhamentoAuditoriaDto,
};