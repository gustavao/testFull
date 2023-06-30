import { Sequelize } from 'sequelize';


const DB_HOST = 'localhost';
const DB_PORT = 3306;
const DB_NAME = 'school';
const DB_USER = 'admin';
const DB_PASSWORD = 'admin';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql'
        });

export  default sequelize;