//En caso de que quiera utilizar ".env" en mi proyecto, activo dotenv.
import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();
program.option('-m, --mode <mode>','Modo de ejecución');
program.parse();

//dotenv.config() SÓLO LEE .env
dotenv.config({
  path: program.opts().mode === "prod" ? './.env.prod' : './.env.dev'
});

export default {
  PERSISTENCE: process.env.PERSISTENCE,
  app: {
    PORT: process.env.SQL_PORT || 3001,
    LOGGER_ENV: process.env.LOGGER_ENV || 'DEVELOPMENT'
  },
  sql: {
    HOST: process.env.SQL_HOST || 'localhost:27017',
    USER: process.env.SQL_USER || 'root',
    PASSWORD: process.env.SQL_PASSWORD || 'root',
    DATABASE_NAME: process.env.SQL_DATABASE_NAME || 'ecommerce',
    DATABASE_URL:process.env.SQL_DATABASE_URL || 'localhost:8080'
  },
  react: {
    BASEURL: process.env.VITE_FRONT_URL
  }
}