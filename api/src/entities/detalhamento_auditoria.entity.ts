import { PrimaryGeneratedColumn, Entity, Column, OneToOne } from "typeorm";
import { AuditoriaEntity } from "./auditoria.entity";


@Entity()
class DetalhamentoAuditoriaEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome_do_produto: string;

    @Column("numeric")
    valor_anterior: string

    @Column("numeric")
    valor_atual: string
    
    @Column()
    observacoes_adicionais: string;
    
    @OneToOne(()=> AuditoriaEntity, (auditoriaEntity)=> auditoriaEntity.detalhamento_auditoria)
    auditoria: AuditoriaEntity;
}

export { DetalhamentoAuditoriaEntity};