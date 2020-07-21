// @flow
import { Sequelize } from 'sequelize';
import User from './User';

const models = [
  User,
]

class Connection {
  instance: ?Sequelize;

  async init(): Promise<self> {
    let instance = null;
    while (instance == null) {
      try {
        instance = new Sequelize({
          dialect: 'sqlite',
          storage: './database.sqlite',
        });

        await instance.authenticate();

        models.forEach(model => {
          if (instance == null) return;
          const options = {
            sequelize: instance,
          };
          model.init(model.attributes, options);
        });

        await instance.sync();
        break;
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
    console.log('Connection has been established successfully.');
    this.instance = instance;
    return this;
  }
}

const connection = new Connection();
export default connection.init();
