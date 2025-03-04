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
import { BaseAppError } from "../../errors/global_error.error";
import { Either } from "../../globals/errors/left_right_either.error";

interface ICategoryService {
    getCategories: (
        page: number,
        amount: number
    ) => Promise<Either<BaseAppError, ResponseGetCategoriesDto>>;
    findCategoryById: (
        id: string
    ) => Promise<Either<BaseAppError, ResponseFindCategoryByIdDto>>;
    findCategoryByName: (
        name: string
    ) => Promise<Either<BaseAppError, ResponseFindCategoryByIdDto>>;
    createCategoria: (
        payload: PayloadCreateCategoria
    ) => Promise<Either<BaseAppError, ResponseCreateCategoria>>;
    updateCategory: (
        payload: PayloadUpdateCategory
    ) => Promise<Either<BaseAppError, ResponseUpdateCategory>>;
    deleteCategory: (id: string) => Promise<Either<BaseAppError, null>>;
    archiveCategory: (
        id: string
    ) => Promise<Either<BaseAppError, ResponseArchiveCategory>>;
}

export { ICategoryService };