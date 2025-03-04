import IUserService from "../interfaces/usuario_interfaces/usuario_service.interface";
import { ResponseArchiveUsuario } from "../dtos/usuario_dtos/delete_usuario.dto";
import {
    ResponseFindUsuarioByIdDto,
    ResponseGetUsuariosDto,
} from "../dtos/usuario_dtos/get_usuario.dto";
import {
    PayloadUpdateUsuarioDto,
    ResponseUpdateUsuarioDto,
} from "../dtos/usuario_dtos/update_usuario.dto";
import {
    PayloadCreateUsuario,
    ResponseCreateUsuario,
} from "../dtos/usuario_dtos/create_usuario.dto";
import {
    PayloadLoginUsuarioDto,
    ResponseLoginUsuarioDto,
} from "../dtos/usuario_dtos/usuario_login.dto";
import {
    PayloadRegisterUsuarioDto,
    ResponseRegisterUsuarioDto,
} from "../dtos/usuario_dtos/usuario_register.dto";
import { Either, right } from "../globals/errors/left_right_either.error";
import { BaseAppError } from "../errors/global_error.error";
import IUsuarioRepository from "../interfaces/usuario_interfaces/usuario_repository.interface";
import { IUsuarioValidator } from "../interfaces/usuario_interfaces/usuario_validator.interface";

class UsuarioService implements IUserService {
    constructor(
        private userRepository: IUsuarioRepository,
        private userValidator: IUsuarioValidator
    ) {}
    async getUsers(
        page: number,
        amount: number
    ): Promise<Either<BaseAppError, ResponseGetUsuariosDto>> {
        return right({} as ResponseGetUsuariosDto);
    }
    async findUserById(
        id: string
    ): Promise<Either<BaseAppError, ResponseFindUsuarioByIdDto>> {
        return right({} as ResponseFindUsuarioByIdDto);
    }
    async createUsuario(
        payload: PayloadCreateUsuario
    ): Promise<Either<BaseAppError, ResponseCreateUsuario>> {
        return right({} as ResponseCreateUsuario);
    }
    async updateUser(
        payload: PayloadUpdateUsuarioDto
    ): Promise<Either<BaseAppError, ResponseUpdateUsuarioDto>> {
        return right({} as ResponseUpdateUsuarioDto);
    }
    async deleteUser(id: string): Promise<Either<BaseAppError, null>> {
        return right(null);
    }
    async archiveUser(
        id: string
    ): Promise<Either<BaseAppError, ResponseArchiveUsuario>> {
        return right({} as ResponseArchiveUsuario);
    }
    async loginUsuario(
        payload: PayloadLoginUsuarioDto
    ): Promise<Either<BaseAppError, ResponseLoginUsuarioDto>> {
        return right({} as ResponseLoginUsuarioDto);
    }
    async registerUsuario(
        payloadUsuario: PayloadRegisterUsuarioDto
    ): Promise<Either<BaseAppError, ResponseRegisterUsuarioDto>> {
        return right({} as ResponseRegisterUsuarioDto);
    }
}

export { UsuarioService };