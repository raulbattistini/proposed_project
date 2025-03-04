import Categoria from "../../entities/categoria.entity";
import { BaseMessageGet, BaseMessageGetOne } from "../global_get.dto";

type ResponseGetCategoriesDto = BaseMessageGet<Categoria>;

type ResponseFindCategoryByIdDto = BaseMessageGetOne<Categoria>;

export { ResponseFindCategoryByIdDto, ResponseGetCategoriesDto };