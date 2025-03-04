import {
    PayloadCreateDetalhamentoAuditoriaDto,
    ResponseCreateDetalhamentoAuditoriaDto,
} from "../../dtos/detalhamento_auditoria/create_detalhamentos_auditoria.dto";
import { ResponseArchivedDetalhamentoAuditoriaDto } from "../../dtos/detalhamento_auditoria/delete_detalhamentos_auditoria.dto";
import {
    ResponseFindDetalhamentoAuditoriaDto,
    ResponseGetDetalhamentosAuditoriaDto,
} from "../../dtos/detalhamento_auditoria/get_detalhamentos_auditoria.dto";
import {
    PayloadUpdateDetalhamentoAuditoriaDto,
    ResponseUpdateDetalhamentoAuditoriaDto,
} from "../../dtos/detalhamento_auditoria/update_detalhamentos_auditoria.dto";

interface DetalhamentoAuditoriaInterface {
    getDetalhamentosAuditoria: (
        page: number,
        amount: number
    ) => Promise<ResponseGetDetalhamentosAuditoriaDto>;
    findDetalhamentoAuditoriaById: (
        id: string
    ) => Promise<ResponseFindDetalhamentoAuditoriaDto>;
    createDetalhamentAuditoria: (
        payload: PayloadCreateDetalhamentoAuditoriaDto
    ) => Promise<ResponseCreateDetalhamentoAuditoriaDto>;
    updateDetalhamentoAuditoria: (
        payload: PayloadUpdateDetalhamentoAuditoriaDto
    ) => Promise<ResponseUpdateDetalhamentoAuditoriaDto>;
    deleteDetalhamentoAuditoria: (id: string) => Promise<void>;
    archiveDetalhamentoAuditoria: (
        id: string
    ) => Promise<ResponseArchivedDetalhamentoAuditoriaDto>;
}

export { DetalhamentoAuditoriaInterface };