import { z } from "zod";
import categoriasNomesEnum, {
    CategoriasNomesEnum,
} from "../../enums/categorias_nomes.enum";

const categoriasNomes = Object.values(categoriasNomesEnum).join(", ");

const ProdutoSchema = z.object({
    id: z.string().uuid().nonempty("É necessário prover um ID"),
    name: z.string().nonempty("É necessário prover um nome para o produto"),
    ativo: z.boolean().default(true),
    sku: z.string().nonempty("É necessário prover um SKU para o produto"),
    categoria: z
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
    valor_de_custo: z.number().nonnegative("O valor precisa ser positivo"),
    icms: z
        .number()
        .int()
        .nonnegative("A taxa de ICMS precisa ser positivo")
        .default(0),
    valor_de_venda: z
        .number()
        .nonnegative("O valor de venda precisa ser positivo")
        .default(0),
    data_de_cadastro: z.date().default(new Date()),
    quantidade_em_estoque: z
        .number()
        .int()
        .nonnegative("É necessário que a quantidade em estoque seja positiva."),
});

export default ProdutoSchema;