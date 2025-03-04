import { DataSource, Repository } from "typeorm";
import { DetalhamentoAuditoriaEntity } from "../entities/detalhamento_auditoria.entity";
import IDetalhamentoAuditoriaRepository from "../interfaces/detalhamento_auditoria_interfaces/detalhamento_auditoria_repository.interface";
import { RepositoryError } from "../globals/errors/global_repository_error.error";
import { Either, left, right } from "../globals/errors/left_right_either.error";

class DetalhamentoAuditoriaRepository
    implements IDetalhamentoAuditoriaRepository
{
    private repository: Repository<DetalhamentoAuditoriaEntity>;
    constructor(private readonly connection: DataSource) {
        this.repository = this.connection.getRepository(
            DetalhamentoAuditoriaEntity
        );
    }
    async getDetalhamentoAuditorias(): Promise<
        Either<RepositoryError, DetalhamentoAuditoriaEntity[]>
    > {
        return left(new RepositoryError("error message"));
    }
    async getDetalhamentoAuditoriasById(
        id: string
    ): Promise<Either<RepositoryError, DetalhamentoAuditoriaEntity>> {
        return left(new RepositoryError("error message"));
    }
    async createDetalhamentoAuditoria(
        payload: Omit<DetalhamentoAuditoriaEntity, "id">
    ): Promise<Either<RepositoryError, DetalhamentoAuditoriaEntity>> {
        return right(new DetalhamentoAuditoriaEntity());
    }
    async updateDetalhamentoAuditoria(
        payload: DetalhamentoAuditoriaEntity
    ): Promise<Either<RepositoryError, null>> {
        return right(null);
    }
    async archiveDetalhamentoAuditoria(
        id: string
    ): Promise<Either<RepositoryError, null>> {
        return left(new RepositoryError("message error"));
    }
    async deleteDetalhamentoAuditoria(
        id: string
    ): Promise<Either<RepositoryError, null>> {
        return right(null);
    }
}

export default DetalhamentoAuditoriaRepository;