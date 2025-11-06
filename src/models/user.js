import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false, unique: true },
  correo: { type: DataTypes.STRING, allowNull: false, unique: true },
  contrasenia: { type: DataTypes.STRING, allowNull: false },

  
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'participante',
    validate: {
      isIn: [['participante', 'sorteador']]
    }
  }
});





export default User;