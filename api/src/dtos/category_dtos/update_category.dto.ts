import Categoria from "../../entities/categoria.entity";
import { BaseDefaultMessage } from "../global_get.dto";

type PayloadUpdateCategory = Omit<Categoria, "id">;

type ResponseUpdateCategory = BaseDefaultMessage & Omit<Categoria, "id">;

export { PayloadUpdateCategory, ResponseUpdateCategory };