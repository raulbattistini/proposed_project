import {
    BaseMessageGet,
    BaseMessageGetOne,
} from "../global_get.dto";
import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";

type ResponseGetDetalhamentosAuditoriaDto =
    BaseMessageGet<DetalhamentoAuditoriaEntity>;

type ResponseFindDetalhamentoAuditoriaDto =
    BaseMessageGetOne<DetalhamentoAuditoriaEntity>;

export {
    ResponseFindDetalhamentoAuditoriaDto,
    ResponseGetDetalhamentosAuditoriaDto,
};