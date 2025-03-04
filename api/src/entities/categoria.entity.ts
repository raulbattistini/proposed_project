import { PrimaryGeneratedColumn, Entity, Column, OneToOne } from "typeorm";
import { CategoriasTiposEnum } from "../enums/categorias_tipos.enum";
import { CategoriasNomesEnum } from "../enums/categorias_nomes.enum";

// todo specify tables names for the entity to refer in whichever case
@Entity()
class Categoria {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    // @OneToOne(()=>ProductEntity, (productEntity)=>productEntity.categoria)
    // @Column("text") provavelmente aqui e uma column e precisa setar a relacao de *-->1 (pode haver muitos produtos de uma so categoria )
    @Column("text")
    nome: CategoriasNomesEnum;

    @Column()
    ativo: boolean;

    @Column("text")
    tipo: CategoriasTiposEnum;
}

export default Categoria;