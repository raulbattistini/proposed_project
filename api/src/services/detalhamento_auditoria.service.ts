import {
    PayloadCreateDetalhamentoAuditoriaDto,
    ResponseCreateDetalhamentoAuditoriaDto,
} from "../dtos/detalhamento_auditoria/create_detalhamentos_auditoria.dto";
import { ResponseArchivedDetalhamentoAuditoriaDto } from "../dtos/detalhamento_auditoria/delete_detalhamentos_auditoria.dto";
import {
    ResponseFindDetalhamentoAuditoriaDto,
    ResponseGetDetalhamentosAuditoriaDto,
} from "../dtos/detalhamento_auditoria/get_detalhamentos_auditoria.dto";
import {
    PayloadUpdateDetalhamentoAuditoriaDto,
    ResponseUpdateDetalhamentoAuditoriaDto,
} from "../dtos/detalhamento_auditoria/update_detalhamentos_auditoria.dto";
import { BaseAppError } from "../errors/global_error.error";
import { Either, right } from "../globals/errors/left_right_either.error";
import IDetalhamentoAuditoriaService from "../interfaces/detalhamento_auditoria_interfaces/detalhamento_auditoria_service.interface";
import DetalhamentoAuditoriaRepository from "../repositories/detalhamento_auditoria.repository";
import DetalhamentoAuditoriaValidator from "../validators/detalhamento_auditoria.validator";

class DetalhamentoAuditoriaService implements IDetalhamentoAuditoriaService {
    constructor(
        private detalhamentoAuditoriaRepository: DetalhamentoAuditoriaRepository,
        private detalhamentoAuditoriaValidator: DetalhamentoAuditoriaValidator
    ) {}
    async getDetalhamentosAuditoria(
        page: number,
        amount: number
    ): Promise<Either<BaseAppError, ResponseGetDetalhamentosAuditoriaDto>> {
        return right({} as ResponseGetDetalhamentosAuditoriaDto);
    }
    async findDetalhamentoAuditoriaById(
        id: string
    ): Promise<Either<BaseAppError, ResponseFindDetalhamentoAuditoriaDto>> {
        return right({} as ResponseFindDetalhamentoAuditoriaDto);
    }
    async createDetalhamentAuditoria(
        payload: PayloadCreateDetalhamentoAuditoriaDto
    ): Promise<Either<BaseAppError, ResponseCreateDetalhamentoAuditoriaDto>> {
        return right({} as ResponseCreateDetalhamentoAuditoriaDto);
    }
    async updateDetalhamentoAuditoria(
        payload: PayloadUpdateDetalhamentoAuditoriaDto
    ): Promise<Either<BaseAppError, ResponseUpdateDetalhamentoAuditoriaDto>> {
        return right({} as ResponseUpdateDetalhamentoAuditoriaDto);
    }
    async deleteDetalhamentoAuditoria(
        id: string
    ): Promise<Either<BaseAppError, void>> {
        return right(undefined);
    }
    async archiveDetalhamentoAuditoria(
        id: string
    ): Promise<Either<BaseAppError, ResponseArchivedDetalhamentoAuditoriaDto>> {
        return right({} as ResponseArchivedDetalhamentoAuditoriaDto);
    }
}

export { DetalhamentoAuditoriaService };