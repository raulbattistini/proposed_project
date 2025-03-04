import { z } from "zod";

const categoriasTiposEnum = z.enum(["Normal", "Especial", "Personalizado"]);

export type CategoriasTiposEnum = z.infer<typeof categoriasTiposEnum>;

export default categoriasTiposEnum;