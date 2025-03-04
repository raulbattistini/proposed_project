import { BaseDefaultMessage } from "../global_get.dto";
import Categoria from "../../entities/categoria.entity";

type PayloadCreateCategoria = Omit<Categoria, "id">;

type ResponseCreateCategoria = BaseDefaultMessage & Categoria;

export { PayloadCreateCategoria, ResponseCreateCategoria };