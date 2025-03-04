import { DataSource, Repository } from "typeorm";
import Categoria from "../entities/categoria.entity";
import { ICategoryService } from "../interfaces/category_interfaces/categoria_service.interface";
import {
    ResponseFindCategoryByIdDto,
    ResponseGetCategoriesDto,
} from "../dtos/category_dtos/get_categories.dto";
import { BaseAppError } from "../errors/global_error.error";
import { Either, right } from "../globals/errors/left_right_either.error";
import {
    PayloadCreateCategoria,
    ResponseCreateCategoria,
} from "../dtos/category_dtos/create_categoria.dto";
import {
    PayloadUpdateCategory,
    ResponseUpdateCategory,
} from "../dtos/category_dtos/update_category.dto";
import { ResponseArchiveCategory } from "../dtos/category_dtos/delete_category.dto";
import CategoriaRepository from "../repositories/categoria.repository";
import CategoriaValidator from "../validators/categoria.validator";

class CategoriaService implements ICategoryService {
    constructor(
        private categoriaRepository: CategoriaRepository,
        private categoriaValidator: CategoriaValidator
    ) {}

    async getCategories(
        page: number,
        amount: number
    ): Promise<Either<BaseAppError, ResponseGetCategoriesDto>> {
        return right({} as ResponseGetCategoriesDto);
    }

    async findCategoryById(
        id: string
    ): Promise<Either<BaseAppError, ResponseFindCategoryByIdDto>> {
        return right({} as ResponseFindCategoryByIdDto);
    }
    async findCategoryByName(
        name: string
    ): Promise<Either<BaseAppError, ResponseFindCategoryByIdDto>> {
        return right({} as ResponseFindCategoryByIdDto);
    }
    async createCategoria(
        payload: PayloadCreateCategoria
    ): Promise<Either<BaseAppError, ResponseCreateCategoria>> {
        return right({} as ResponseCreateCategoria);
    }
    async updateCategory(
        payload: PayloadUpdateCategory
    ): Promise<Either<BaseAppError, ResponseUpdateCategory>> {
        return right({} as ResponseUpdateCategory);
    }
    async archiveCategory(
        id: string
    ): Promise<Either<BaseAppError, ResponseArchiveCategory>> {
        return right({} as ResponseArchiveCategory);
    }
    async deleteCategory(id: string): Promise<Either<BaseAppError, null>> {
        return right(null);
    }
}

export { CategoriaService };