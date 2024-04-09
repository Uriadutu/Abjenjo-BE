import { Sequelize } from "sequelize";

const db = new Sequelize("absenjo", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
