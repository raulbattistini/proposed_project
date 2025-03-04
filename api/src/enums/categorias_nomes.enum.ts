import { z } from "zod";

const categoriasNomesEnum = z.enum([
    "ELETRONICOS",
    "INFORMATICA",
    "ELETRODOMESTICOS",
    "CELULARES",
    "MERCADO",
    "CASA",
    "COMERCIO & SEGURANCA",
    "LAZER E ENTRETENIMENTO",
    "MODA",
    "ESPORTE E SAUDE",
]);

export type CategoriasNomesEnum = z.infer<typeof categoriasNomesEnum>;

export default categoriasNomesEnum;