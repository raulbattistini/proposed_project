import { PayloadCreateAuditoria } from "../../dtos/auditoria_dtos/create_auditoria.dto";
import { GetUserPreviousAudictionsDto } from "../../dtos/auditoria_dtos/get_auditoria.dto";
import { AuditoriaEntity } from "../../entities/auditoria.entity";
import { RepositoryError } from "../../globals/errors/global_repository_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

interface IAuditoryRepository {
   getAuditorias(): Promise<Either<RepositoryError, AuditoriaEntity[]>>;
   getAuditoriaById(
      id: string,
   ): Promise<Either<RepositoryError, AuditoriaEntity>>;
   createAuditoria(
      payload: PayloadCreateAuditoria,
   ): Promise<Either<RepositoryError, AuditoriaEntity>>;
   updateAuditoria(
      auditoria: AuditoriaEntity,
   ): Promise<Either<RepositoryError, null>>;
   getRespectivoDetalhamentosAuditoriaById(
      id: string,
   ): Promise<Either<RepositoryError, AuditoriaEntity>>;
   userPreviousAudictions: (
      userId: string,
   ) => Promise<Either<RepositoryError, GetUserPreviousAudictionsDto>>;
   softDeleteAuditoria(id: string): Promise<Either<RepositoryError, null>>;
   deleteAuditoria(id: string): Promise<Either<RepositoryError, null>>;
}

export default IAuditoryRepository;
