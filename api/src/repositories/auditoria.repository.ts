import { DataSource, Repository } from "typeorm";
import { AuditoriaEntity } from "../entities/auditoria.entity";
import IAuditoryRepository from "../interfaces/auditory_interfaces/auditoria_repository.interface";
import { RepositoryError } from "../globals/errors/global_repository_error.error";
import { Either, right, left } from "../globals/errors/left_right_either.error";
import { PayloadCreateAuditoria } from "../dtos/auditoria_dtos/create_auditoria.dto";
import { UsuarioEntity } from "../entities/usuario.entity";
import { GetUserPreviousAudictionsDto } from "../dtos/auditoria_dtos/get_auditoria.dto";

class AuditoriaRepository implements IAuditoryRepository {
   private repository: Repository<AuditoriaEntity>;
   constructor(private readonly connection: DataSource) {
      this.repository = this.connection.getRepository(AuditoriaEntity);
   }

   async getAuditorias(): Promise<Either<RepositoryError, AuditoriaEntity[]>> {
      try {
         const auditorias = await this.repository.find();
         if (!auditorias || auditorias.length === 0) {
            return left(new RepositoryError("No auditorias found"));
         }
         return right(auditorias);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }
   async getAuditoriaById(
      id: string,
   ): Promise<Either<RepositoryError, AuditoriaEntity>> {
      try {
         const auditoria = await this.repository.findOne({ where: { id } });
         if (!auditoria) {
            return left(new RepositoryError("No auditoria found"));
         }
         return right(auditoria);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }
   async createAuditoria(
      payload: PayloadCreateAuditoria,
   ): Promise<Either<RepositoryError, AuditoriaEntity>> {
      try {
         if (!payload) {
            return left(new RepositoryError("No payload found"));
         }
         let auditoria = this.repository.create(payload);
         auditoria = await this.repository.save(auditoria);
         return right(auditoria);
      } catch (error) {
         return left(new RepositoryError("Database error"));
      }
   }
   async updateAuditoria(
      auditoria: AuditoriaEntity,
   ): Promise<Either<RepositoryError, null>> {
      try {
         if (!auditoria) {
            return left(new RepositoryError("No payload found"));
         }
         const auditoriaToUpdate = await this.repository.findOne({
            where: { id: auditoria.id },
         });
         if (!auditoriaToUpdate) {
            return left(new RepositoryError("No auditoria found"));
         }
         await this.repository.update(auditoria.id, auditoriaToUpdate);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("error message"));
      }
   }
   // TODO: fix and redo
   async userPreviousAudictions(
      userId: string,
   ): Promise<Either<RepositoryError, GetUserPreviousAudictionsDto>> {
      try {
         if (!userId) {
            return left(new RepositoryError("No userId provided"));
         }
         const user = new UsuarioEntity();
         user.id = userId;
         const auditorias = await this.repository.find({
            where: { nome_do_auditor: user },
            relations: ["user"],
         });
         if (!auditorias || auditorias.length === 0) {
            return left(new RepositoryError("No auditorias found"));
         }
         return right(auditorias);
      } catch (error) {
         return left(new RepositoryError("error message"));
      }
   }
   async getRespectivoDetalhamentosAuditoriaById(
      id: string,
   ): Promise<Either<RepositoryError, AuditoriaEntity>> {
      try {
         if (!id) {
            return left(new RepositoryError("No id provided"));
         }
         const auditoria = await this.repository.findOne({ where: { id } });
         if (!auditoria) {
            return left(new RepositoryError("No auditoria found"));
         }
         const detalhamentos = await this.repository.findOne({
            where: { id },
            relations: ["detalhamentos"],
         });
         if (!detalhamentos) {
            return left(new RepositoryError("No detalhamentos found"));
         }
         return right(detalhamentos);
      } catch (error) {
         return left(new RepositoryError("error message"));
      }
   }
   async deleteAuditoria(id: string): Promise<Either<RepositoryError, null>> {
      try {
         if (!id) {
            return left(new RepositoryError("No id provided"));
         }
         const auditoria = await this.repository.findOne({ where: { id } });
         if (!auditoria) {
            return left(new RepositoryError("No auditoria found"));
         }
         await this.repository.delete(id);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("error message"));
      }
   }
   async softDeleteAuditoria(
      id: string,
   ): Promise<Either<RepositoryError, null>> {
      try {
         if (!id) {
            return left(new RepositoryError("No id provided"));
         }
         const auditoria = await this.repository.findOne({ where: { id } });
         if (!auditoria) {
            return left(new RepositoryError("No auditoria found"));
         }
         await this.repository.softDelete(id);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("error message"));
      }
   }
}

export default AuditoriaRepository;
