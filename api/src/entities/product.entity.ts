import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    // OneToMany,
    // OneToOne,
    // JoinColumn,
} from "typeorm";
import { AuditoriaEntity } from "./auditoria.entity";
import Categoria from "./categoria.entity";

@Entity()
class ProductEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    // @OneToMany(()=> AuditoriaEntity, (auditoriaEntity)=> auditoriaEntity.itens)
    // name: string
    // @ManyToOne(()=> AuditoriaEntity, (auditoriaEntity)=> auditoriaEntity.itens)
    // @JoinColumn({referencedColumnName: "itens"})
    @Column()
    name: string;

    @Column("text")
    ativo: boolean;

    @Column("text")
    sku: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.id)
    // @JoinColumn({name: "categoria"})
    categoria: Categoria;

    @Column("text")
    valor_de_custo: number;

    @Column("double")
    icms: number;

    @Column("text")
    valor_de_venda: number;

    @Column("timestamp")
    data_de_cadastro: Date;

    @Column("double")
    quantidade_em_estoque: number;
}

export { ProductEntity };