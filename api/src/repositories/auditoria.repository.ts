import { DataSource, Repository } from "typeorm";
import { AuditoriaEntity } from "../entities/auditoria.entity";
import IAuditoryRepository from "../interfaces/auditory_interfaces/auditoria_repository.interface";
import { RepositoryError } from "../globals/errors/global_repository_error.error";
import { Either, left } from "../globals/errors/left_right_either.error";
import { PayloadCreateAuditoria } from "../dtos/auditoria_dtos/create_auditoria.dto";

class AuditoriaRepository implements IAuditoryRepository {
    private repository: Repository<AuditoriaEntity>;
    constructor(private readonly connection: DataSource) {
        this.repository = this.connection.getRepository(AuditoriaEntity);
    }

    async getAuditorias(): Promise<Either<RepositoryError, AuditoriaEntity[]>> {
        return left(new RepositoryError("error message"));
    }
    async getAuditoriaById(
        id: string
    ): Promise<Either<RepositoryError, AuditoriaEntity>> {
        return left(new RepositoryError("error message"));
    }
    async createAuditoria(
        payload: PayloadCreateAuditoria
    ): Promise<Either<RepositoryError, AuditoriaEntity>> {
        return left(new RepositoryError("error message"));
    }
    async updateAuditoria(
        auditoria: AuditoriaEntity
    ): Promise<Either<RepositoryError, null>> {
        return left(new RepositoryError("error message"));
    }
    async deleteAuditoria(id: string): Promise<Either<RepositoryError, null>> {
        return left(new RepositoryError("error message"));
    }
}

export default AuditoriaRepository;