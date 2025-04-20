import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";

type PayloadUpdateDetalhamentoAuditoriaDto = DetalhamentoAuditoriaEntity;
type ResponseUpdateDetalhamentoAuditoriaDto = Omit<
   DetalhamentoAuditoriaEntity,
   "id"
>;

export {
   PayloadUpdateDetalhamentoAuditoriaDto,
   ResponseUpdateDetalhamentoAuditoriaDto,
};
