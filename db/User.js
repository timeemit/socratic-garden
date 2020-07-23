// @flow
import { Sequelize, DataTypes, Model } from 'sequelize';
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
      set(value: string) {
        const hash = bcrypt.hashSync(value, SALT_ROUNDS);
        this.setDataValue('password', hash);
      }
    },
    about: {
      type: DataTypes.TEXT,
    },
    resetCode: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    invitedBy: {
      type: DataTypes.INTEGER,
    },
    invitedAt: {
      type: DataTypes.DATE,
    },
    invitationAcceptedOn: {
      type: DataTypes.DATE,
    }
  }

  static async invite(payload: {|email: string, name: string, invited_by: number|}): Promise<self> {
    const { email, name, invited_by } = payload;
    const [user, _] = await User.findOrCreate({
      where: { email },
      defaults: { name },
    });

    user.invitedBy = invited_by;
    user.invitedAt = new Date();
    return await user.save();
  }

  static async reset(payload: {|code: string, password: string|}): Promise<?self> {
    const { code, password } = payload;
    console.log(code);
    const user = await User.findOne({ where: { resetCode: code } });
    if (user == null) {
      return null;
    }
    user.password = password;
    user.invitationAcceptedOn = new Date();
    return await user.save();
  }
}
