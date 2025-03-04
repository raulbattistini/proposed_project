import { DataSource, Repository } from "typeorm";
import { UsuarioEntity } from "../entities/usuario.entity";
import IUsuarioRepository from "../interfaces/usuario_interfaces/usuario_repository.interface";
import { BaseAppError } from "../errors/global_error.error";
import { Either, right } from "../globals/errors/left_right_either.error";

class UsuarioRepository implements IUsuarioRepository {
    private repository: Repository<UsuarioEntity>;
    constructor(private readonly connection: DataSource) {
        this.repository = this.connection.getRepository(UsuarioEntity);
    }
    async getUsuario(id: string): Promise<Either<BaseAppError, UsuarioEntity>> {
        return right({} as UsuarioEntity);
    }
    async getUsuarios(): Promise<Either<BaseAppError, UsuarioEntity[]>> {
        return right([]);
    }
    async createUsuario(
        payload: Omit<UsuarioEntity, "id">
    ): Promise<Either<BaseAppError, UsuarioEntity>> {
        return right({} as UsuarioEntity);
    }
    async updateUsuario(
        payload: UsuarioEntity
    ): Promise<Either<BaseAppError, null>> {
        return right(null);
    }
    async deleteUsuario(id: string): Promise<Either<BaseAppError, null>> {
        return right(null);
    }
}

export default { UsuarioRepository };