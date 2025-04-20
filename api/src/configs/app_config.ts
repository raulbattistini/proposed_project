import { DataSourceOptions } from "typeorm";
import "dotenv/config";

var appConfig: AppConfig = {
   api: {
      host: "",
      port: 0,
   },
   connectionConfig: {
      type: "postgres",
   },
};

export type ApiConfig = {
   port: number;
   host: string;
};

export type AppConfig = {
   connectionConfig: DataSourceOptions;
   api: ApiConfig;
};

function loadConfig() {
   const apiConfig: ApiConfig = {
      port: 3333,
      host: "localhost",
   };
   appConfig.api = apiConfig;

   const connectionConfig: DataSourceOptions = {
      type: "postgres",
      database: "product",
      host: "localhost",
      port: 5432,
      username: "root",
      password: "postgres",
   };

   appConfig.connectionConfig = connectionConfig;
}

function getApiConfig(): ApiConfig {
   return appConfig.api;
}

function getDbConfig(): DataSourceOptions {
   return appConfig.connectionConfig;
}

export { getApiConfig, getDbConfig, loadConfig };
