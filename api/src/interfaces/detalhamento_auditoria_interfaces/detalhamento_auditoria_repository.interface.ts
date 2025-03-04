import { DetalhamentoAuditoriaEntity } from "../../entities/detalhamento_auditoria.entity";
import { RepositoryError } from "../../globals/errors/global_repository_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

interface IDetalhamentoAuditoriaRepository {
    getDetalhamentoAuditorias: () => Promise<
        Either<RepositoryError, DetalhamentoAuditoriaEntity[]>
    >;
    getDetalhamentoAuditoriasById: (
        id: string
    ) => Promise<Either<RepositoryError, DetalhamentoAuditoriaEntity>>;
    createDetalhamentoAuditoria: (
        payload: Omit<DetalhamentoAuditoriaEntity, "id">
    ) => Promise<Either<RepositoryError, DetalhamentoAuditoriaEntity>>;
    updateDetalhamentoAuditoria: (
        payload: DetalhamentoAuditoriaEntity
    ) => Promise<Either<RepositoryError, null>>;
    archiveDetalhamentoAuditoria: (
        id: string
    ) => Promise<Either<RepositoryError, null>>;
    deleteDetalhamentoAuditoria: (
        id: string
    ) => Promise<Either<RepositoryError, null>>;
}

export default IDetalhamentoAuditoriaRepository;