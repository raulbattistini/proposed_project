import { BaseEntity } from "typeorm";
import {
    PayloadCreateAuditoria,
    ResponseCreateAuditoria,
} from "../../dtos/auditoria_dtos/create_auditoria.dto";
import { ResponseArchivedAuditoria } from "../../dtos/auditoria_dtos/delete_auditoria.dto";
import {
    ResponseFindAuditoriaById,
    ResponseGetAuditorias,
} from "../../dtos/auditoria_dtos/get_auditoria.dto";
import {
    PayloadUpdateAuditoria,
    ResponseUpdateAuditoria,
} from "../../dtos/auditoria_dtos/update_auditoria.dto";
import { BaseAppError } from "../../errors/global_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

interface IAuditoriaService {
    getAuditorias: (
        page: number,
        amount: number
    ) => Promise<Either<BaseAppError, ResponseGetAuditorias>>;
    findAuditoriasById: (
        id: string
    ) => Promise<Either<BaseAppError, ResponseFindAuditoriaById>>;
    createAuditoria: (
        payload: PayloadCreateAuditoria
    ) => Promise<Either<BaseAppError, ResponseCreateAuditoria>>;
    updateAuditoria: (
        payload: PayloadUpdateAuditoria
    ) => Promise<Either<BaseAppError, ResponseUpdateAuditoria>>;
    deleteAuditoria: (id: string) => Promise<Either<BaseAppError, null>>;
    archiveAuditoria: (
        id: string
    ) => Promise<Either<BaseAppError, ResponseArchivedAuditoria>>;
}

export { IAuditoriaService };