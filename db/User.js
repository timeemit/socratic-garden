// @flow
import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export default class User extends Model {
  static attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value: string) {
        const hash = bcrypt.hashSync(value, SALT_ROUNDS);
        this.setDataValue('password', hash);
      }
    },
  }
}
