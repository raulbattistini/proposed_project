import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type PayloadCreateDetalhamentoAuditoriaDto = Omit<
    DetalhamentoAuditoriaEntity,
    "id"
>;

type ResponseCreateDetalhamentoAuditoriaDto = BaseDefaultMessage &
    DetalhamentoAuditoriaEntity;

export {
    PayloadCreateDetalhamentoAuditoriaDto,
    ResponseCreateDetalhamentoAuditoriaDto,
};