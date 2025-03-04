import { AuditoriaEntity } from "../../entities/auditoria.entity";
import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type ResponseArchivedAuditoria = BaseDefaultMessage &
    Omit<AuditoriaEntity, "detalhamento_auditoria"> & {
        detalhamento_auditoria: Omit<DetalhamentoAuditoriaEntity, "auditoria">;
    };

export { ResponseArchivedAuditoria };