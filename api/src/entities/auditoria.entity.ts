import {
   PrimaryGeneratedColumn,
   Column,
   Entity,
   OneToOne,
   JoinColumn,
   ManyToMany,
   JoinTable,
} from "typeorm";
import { AcaoEfetuadaEnum } from "../enums/acao_efetuada.enum";
import { DetalhamentoAuditoriaEntity } from "./detalhamento_auditoria.entity";
import { UsuarioEntity } from "./usuario.entity";
import { ProductEntity } from "./product.entity";

@Entity()
class AuditoriaEntity {
   @PrimaryGeneratedColumn("uuid")
   id: string;
   @ManyToMany(() => ProductEntity)
   @JoinTable({
      name: "produtos_por_auditoria",
      joinColumn: {
         name: "auditoria_id",
         referencedColumnName: "id",
      },
      inverseJoinColumn: {
         name: "produto_id",
         referencedColumnName: "id",
      },
   })
   itens: ProductEntity[];

   @Column()
   acao_efetuada: AcaoEfetuadaEnum;

   @Column()
   data_de_audicao: Date;

   @OneToOne(() => UsuarioEntity, (usuarioEntity) => usuarioEntity.nome)
   @JoinColumn({ name: "nome_do_auditor" })
   nome_do_auditor: UsuarioEntity;

   @OneToOne(
      () => DetalhamentoAuditoriaEntity,
      (detalhamentoAuditoriaEntity) => detalhamentoAuditoriaEntity.id,
   )
   @JoinColumn()
   detalhamento_auditoria: DetalhamentoAuditoriaEntity;
}

export { AuditoriaEntity };
