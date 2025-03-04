import { z } from "zod";
import categoriasNomesEnum, {
    CategoriasNomesEnum,
} from "../../enums/categorias_nomes.enum";
import categoriasTiposEnum, {CategoriasTiposEnum} from "../../enums/categorias_tipos.enum";

const categoriasNomes = Object.values(categoriasNomesEnum).join(", ");
const categoriasTipos = Object.values(categoriasTiposEnum).join(", ");

const CategoriaSchema = z.object({
    id: z.string().uuid().nonempty("É necessário prover um ID"),
    nome: z
        .string()
        .refine(
            (value) =>
                Object.values(categoriasNomesEnum).includes(
                    value as CategoriasNomesEnum
                ),
            {
                message: `As categorias devem ser dos tipos ${categoriasNomes}`,
            }
        ),
    ativo: z.boolean().default(true),
    tipo: z
        .string()
        .refine(
            (value) =>
                Object.values(categoriasTiposEnum).includes(
                    value as CategoriasTiposEnum
                ),
            {
                message: `As categorias devem ser dos tipos ${categoriasTipos}`,
            }
        ),
});

export default CategoriaSchema;