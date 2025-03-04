import {
    PayloadCreateAuditoria,
    ResponseCreateAuditoria,
} from "../../dtos/auditoria_dtos/create_auditoria.dto";
import { ResponseArchivedAuditoria } from "../../dtos/auditoria_dtos/delete_auditoria.dto";
import {
    ResponseFindAuditoriaById,
    ResponseGetAuditorias,
} from "../../dtos/auditoria_dtos/get_auditoria.dto";
import { PayloadUpdateAuditoria, ResponseUpdateAuditoria } from "../../dtos/auditoria_dtos/update_auditoria.dto";

interface AuditoriaInterface {
    getAuditorias: (
        page: number,
        amount: number
    ) => Promise<ResponseGetAuditorias>;
    findAuditoriasById: (id: string) => Promise<ResponseFindAuditoriaById>;
    createAuditoria: (
        payload: PayloadCreateAuditoria
    ) => Promise<ResponseCreateAuditoria>;
    updateAuditoria: (payload: PayloadUpdateAuditoria) => Promise<ResponseUpdateAuditoria>;
    deleteAuditoria: (id: string) => Promise<void>;
    archiveAuditoria: (id: string) => Promise<ResponseArchivedAuditoria>;
}

export { AuditoriaInterface };