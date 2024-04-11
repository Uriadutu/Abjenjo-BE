import { Sequelize } from "sequelize";
import db from "../config/Database.s";
import Pengajuan from "./PengajuanModel";

const { DataTypes } = Sequelize;

const Kehadiran = db.denife(
  "Kehadiran",
  {
    id_kepsek: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    id_guru: {
      type: DataTypes.INTEGER,
    },
    masuk: {
      type: DataTypes.STRING,
    },
    keluar: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);


Guru.hasMany(Kehadiran);
Kehadiran.belongsTo(Guru, { foreignKey: "id_guru" });


export default Pengajuan