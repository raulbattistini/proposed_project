import { getDbConfig } from "../configs/app_config";
import { DataSource } from "typeorm";

const dbConfig = getDbConfig();
const postgresConnection = new DataSource(dbConfig);

export default postgresConnection;