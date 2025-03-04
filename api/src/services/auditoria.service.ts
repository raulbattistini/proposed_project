import { IAuditoriaService } from "../interfaces/auditory_interfaces/auditoria_service.interface";
import {
    PayloadCreateAuditoria,
    ResponseCreateAuditoria,
} from "../dtos/auditoria_dtos/create_auditoria.dto";
import { ResponseArchivedAuditoria } from "../dtos/auditoria_dtos/delete_auditoria.dto";
import {
    ResponseFindAuditoriaById,
    ResponseGetAuditorias,
} from "../dtos/auditoria_dtos/get_auditoria.dto";
import {
    PayloadUpdateAuditoria,
    ResponseUpdateAuditoria,
} from "../dtos/auditoria_dtos/update_auditoria.dto";
import AuditoriaRepository from "../repositories/auditoria.repository";
import { Either, right } from "../globals/errors/left_right_either.error";
import { BaseAppError } from "../errors/global_error.error";
import AuditoriaValidator from "../validators/auditoria.validator";

class AuditoriaService implements IAuditoriaService {
    constructor(
        private auditoriaRepository: AuditoriaRepository,
        private auditoriaValidator: AuditoriaValidator
    ) {}
    async getAuditorias(
        page: number,
        amount: number
    ): Promise<Either<BaseAppError, ResponseGetAuditorias>> {
        return right({} as ResponseGetAuditorias);
    }
    async findAuditoriasById(
        id: string
    ): Promise<Either<BaseAppError, ResponseFindAuditoriaById>> {
        return right({} as ResponseFindAuditoriaById);
    }
    async createAuditoria(
        payload: PayloadCreateAuditoria
    ): Promise<Either<BaseAppError, ResponseCreateAuditoria>> {
        return right({} as ResponseCreateAuditoria);
    }
    async updateAuditoria(
        payload: PayloadUpdateAuditoria
    ): Promise<Either<BaseAppError, ResponseUpdateAuditoria>> {
        return right({} as ResponseUpdateAuditoria);
    }
    async deleteAuditoria(id: string): Promise<Either<BaseAppError, null>> {
        return right(null);
    }
    async archiveAuditoria(
        id: string
    ): Promise<Either<BaseAppError, ResponseArchivedAuditoria>> {
        return right({} as ResponseArchivedAuditoria);
    }
}

export { AuditoriaService };