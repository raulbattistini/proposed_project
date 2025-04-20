import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { PermissoesUsuarioEnum } from "../enums/usuarios_permissoes.enum";
import { AuditoriaEntity } from "./auditoria.entity";

@Entity("usuarios")
class UsuarioEntity {
   @PrimaryGeneratedColumn("uuid")
   id: string;

   @Column("text")
   nome: string;

   @Column("text")
   permissoes: PermissoesUsuarioEnum;

   @Column("text", { nullable: false })
   email: string;

   @Column("text")
   private senha: string;

   @Column()
   ativo: boolean;

   @OneToOne(
      () => AuditoriaEntity,
      (auditoriaEntity) => auditoriaEntity.nome_do_auditor,
   )
   auditorias_realizadas: AuditoriaEntity;
}

export { UsuarioEntity };
