import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";

type PayloadCreateDetalhamentoAuditoriaDto = Omit<
   DetalhamentoAuditoriaEntity,
   "id"
>;

type ResponseCreateDetalhamentoAuditoriaDto = DetalhamentoAuditoriaEntity;

export {
   PayloadCreateDetalhamentoAuditoriaDto,
   ResponseCreateDetalhamentoAuditoriaDto,
};
