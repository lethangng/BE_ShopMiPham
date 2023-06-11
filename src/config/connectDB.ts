import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

const dbName = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD;
const dbUserName = process.env.DB_NAME as string;
const dbHost = process.env.DB_HOST;
const dbDialect = "mysql";

const sequelize = new Sequelize(dbUserName, dbName, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection DB successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default { sequelize, connectDB };
