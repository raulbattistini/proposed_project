import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import { ServerError } from "../errors/server_errors/five_xx.error";

export type ApiConfig = {
   port: number;
   host: string;
};

export type AppConfig = {
   connectionConfig: DataSourceOptions;
   api: ApiConfig;
};

class Config {
   private appConfig: AppConfig;
   private static instance: Config;
   private static connection: DataSource | null = null;
   constructor() {
      this.appConfig = {
         api: this.loadApiConfig(),
         connectionConfig: this.loadDbConfig(),
      };
   }
   public static getInstance(): Config {
      if (!Config.instance) {
         Config.instance = new Config();
      }
      return Config.instance;
   }
   private loadApiConfig(): ApiConfig {
      return {
         port: Number(process.env.APP_PORT) || 3333,
         host: String(process.env.APP_HOST) || "localhost",
      };
   }
   private loadDbConfig(): DataSourceOptions {
      const connectionOptions: DataSourceOptions = {
         type: "postgres",
         database: process.env.DB_NAME,
         host: process.env.DB_HOST,
         port: Number(process.env.DB_PORT) || 5432,
         username: process.env.DB_USERNAME,
         password: process.env.DB_PASSWORD,
      };
      return connectionOptions;
   }
   public getApiConfig(): ApiConfig {
      return this.appConfig.api;
   }
   public getDbConfig(): DataSource {
      try {
         if (Config.connection && Config.connection.isInitialized) {
            return Config.connection;
         }
         Config.connection = new DataSource(this.loadDbConfig());
         Config.connection.initialize();
         return Config.connection;
      } catch (error) {
         throw new ServerError(
            "500",
            true,
            "Failure when connecting to the database",
         );
      }
   }
}

export default Config;
