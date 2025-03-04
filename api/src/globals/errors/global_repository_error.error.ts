import ServerSideErrorsEnum from "../../enums/errors_enums/errors_status_codes.enum";
import { ServerError } from "../../errors/server_errors/five_xx.error";

export class RepositoryError extends ServerError {
    constructor(message: string) {
        super(ServerSideErrorsEnum.Values[500], true, message);
    }
}