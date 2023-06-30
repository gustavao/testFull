
import { DataTypes, Model } from "sequelize";
import sequelize  from '../config/database'
import Estudiantes from "./estudiantes";

interface CalificacionesAttributes {
id? : number;
idEstudiante: number;
calificacion: number;
status: string;
}

class Calificaciones extends Model<CalificacionesAttributes> implements CalificacionesAttributes {
   public id? : number;
   public idEstudiante!: number;
   public calificacion!: number;
   public status!: string;
   

}

Calificaciones.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idEstudiante: {
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: Estudiantes,
            key: 'id'
        }
      },
      calificacion: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
      status: {
        type: DataTypes.STRING,
        allowNull:false
      }
  }, {
    sequelize, 
    modelName: 'Calificaciones',
    tableName: 'calificaciones'
  });

  Estudiantes.hasMany(Calificaciones, {foreignKey: 'idEstudiante', as: 'calificaciones'})
  Calificaciones.belongsTo(Estudiantes, {foreignKey: 'idEstudiante', as: 'estudiantes'})

export default Calificaciones;