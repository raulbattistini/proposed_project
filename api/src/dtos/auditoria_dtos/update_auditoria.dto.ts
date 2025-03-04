import { BaseDefaultMessage } from "../global_get.dto";
import { AuditoriaEntity } from "../../entities/auditoria.entity";
import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";

type PayloadUpdateAuditoria = Omit<AuditoriaEntity, "detalhamento_auditoria"> &
    Omit<DetalhamentoAuditoriaEntity, "id" | "auditoria">;

type ResponseUpdateAuditoria = BaseDefaultMessage &
    Omit<AuditoriaEntity, "id" | "detalhamento_auditoria"> & {
        detalhamento_auditoria: Omit<
            DetalhamentoAuditoriaEntity,
            "id" | "auditoria"
        >;
    };

export { PayloadUpdateAuditoria, ResponseUpdateAuditoria };