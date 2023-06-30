
import { DataTypes, Model } from "sequelize";
import sequelize  from '../config/database'
interface EstudiantesAttributes {
id? : number;
nombre: string;
edad: number;
status: string;
}

class Estudiantes extends Model<EstudiantesAttributes> implements EstudiantesAttributes {
   public id? : number;
   public nombre!: string;
   public edad!: number;
   public status!: string;
   

}

Estudiantes.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull:true
      },
      status: {
        type: DataTypes.STRING,
        allowNull:false
      }
  }, {
   
    sequelize, 
    modelName: 'Estudiante',
    tableName: 'estudiante'
  });

export default Estudiantes;