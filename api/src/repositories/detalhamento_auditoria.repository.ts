import { DataSource, Repository } from "typeorm";
import { DetalhamentoAuditoriaEntity } from "../entities/detalhamento_auditoria.entity";
import IDetalhamentoAuditoriaRepository from "../interfaces/detalhamento_auditoria_interfaces/detalhamento_auditoria_repository.interface";
import { RepositoryError } from "../globals/errors/global_repository_error.error";
import { Either, right, left } from "../globals/errors/left_right_either.error";

class DetalhamentoAuditoriaRepository
   implements IDetalhamentoAuditoriaRepository
{
   private repository: Repository<DetalhamentoAuditoriaEntity>;
   constructor(private readonly connection: DataSource) {
      this.repository = this.connection.getRepository(
         DetalhamentoAuditoriaEntity,
      );
   }
   async getDetalhamentoAuditorias(): Promise<
      Either<RepositoryError, DetalhamentoAuditoriaEntity[]>
   > {
      try {
         const detalhamentoAuditorias = await this.repository.find();
         if (!detalhamentoAuditorias || detalhamentoAuditorias.length === 0) {
            return left(
               new RepositoryError("No detalhamento auditorias found"),
            );
         }
         return right(detalhamentoAuditorias);
      } catch (error) {
         return left(new RepositoryError("Repository error"));
      }
   }
   async getDetalhamentoAuditoriasById(
      id: string,
   ): Promise<Either<RepositoryError, DetalhamentoAuditoriaEntity>> {
      try {
         const data = await this.repository.findOne({ where: { id } });
         if (!data) {
            return left(new RepositoryError("No detalhamento auditoria found"));
         }
         return right(data);
      } catch (error) {
         return left(new RepositoryError("Repository error"));
      }
   }
   async createDetalhamentoAuditoria(
      payload: Omit<DetalhamentoAuditoriaEntity, "id">,
   ): Promise<Either<RepositoryError, DetalhamentoAuditoriaEntity>> {
      try {
         if (!payload) {
            return left(new RepositoryError("No payload found"));
         }
         let detalhamentoAuditoria = this.repository.create(payload);
         detalhamentoAuditoria = await this.repository.save(
            detalhamentoAuditoria,
         );
         return right(detalhamentoAuditoria);
      } catch (error) {
         return left(new RepositoryError("Repository error"));
      }
   }
   async updateDetalhamentoAuditoria(
      payload: DetalhamentoAuditoriaEntity,
   ): Promise<Either<RepositoryError, null>> {
      try {
         if (!payload) {
            return left(new RepositoryError("No payload found"));
         }
         const detalhamentoAuditoriaToUpdate = await this.repository.findOne({
            where: { id: payload.id },
         });
         if (!detalhamentoAuditoriaToUpdate) {
            return left(new RepositoryError("No detalhamento auditoria found"));
         }
         await this.repository.update(payload.id, payload);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("Repository error"));
      }
   }
   async archiveDetalhamentoAuditoria(
      id: string,
   ): Promise<Either<RepositoryError, null>> {
      try {
         if (!id) {
            return left(new RepositoryError("No id found"));
         }
         const detalhamentoAuditoriaToArchive = await this.repository.findOne({
            where: { id },
         });
         if (!detalhamentoAuditoriaToArchive) {
            return left(new RepositoryError("No detalhamento auditoria found"));
         }
         await this.repository.softRemove(detalhamentoAuditoriaToArchive);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("Repository error"));
      }
   }
   async deleteDetalhamentoAuditoria(
      id: string,
   ): Promise<Either<RepositoryError, null>> {
      try {
         if (!id) {
            return left(new RepositoryError("No id found"));
         }
         const detalhamentoAuditoriaToDelete = await this.repository.findOne({
            where: { id },
         });
         if (!detalhamentoAuditoriaToDelete) {
            return left(new RepositoryError("No detalhamento auditoria found"));
         }
         await this.repository.remove(detalhamentoAuditoriaToDelete);
         return right(null);
      } catch (error) {
         return left(new RepositoryError("Repository error"));
      }
   }
}
export default DetalhamentoAuditoriaRepository;
