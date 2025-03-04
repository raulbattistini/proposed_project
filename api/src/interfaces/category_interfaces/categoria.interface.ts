import {
    PayloadCreateCategoria,
    ResponseCreateCategoria,
} from "../../dtos/category_dtos/create_categoria.dto";
import { ResponseArchiveCategory } from "../../dtos/category_dtos/delete_category.dto";
import {
    ResponseFindCategoryByIdDto,
    ResponseGetCategoriesDto,
} from "../../dtos/category_dtos/get_categories.dto";
import {
    PayloadUpdateCategory,
    ResponseUpdateCategory,
} from "../../dtos/category_dtos/update_category.dto";

interface CategoryRepositoryInterface {
    getCategories: (
        page: number,
        amount: number
    ) => Promise<ResponseGetCategoriesDto>;
    findCategoryById: (id: string) => Promise<ResponseFindCategoryByIdDto>;
    findCategoryByName: (name: string) => Promise<ResponseFindCategoryByIdDto>;
    createCategoria: (
        payload: PayloadCreateCategoria
    ) => Promise<ResponseCreateCategoria>;
    updateCategory: (
        payload: PayloadUpdateCategory
    ) => Promise<ResponseUpdateCategory>;
    deleteCategory: (id: string) => Promise<void>;
    archiveCategory: (id: string) => Promise<ResponseArchiveCategory>;
}

export { CategoryRepositoryInterface };