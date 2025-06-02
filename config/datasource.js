import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let database = null;

const loadModels = async (sequelize) => {
  const dir = path.join(__dirname, '../models');
  const files = fs.readdirSync(dir);
  const models = {};

  for (const file of files) {
    const modelPath = path.join(dir, file);
    const { default: defineModel } = await import(`file://${modelPath}`);
    const model = defineModel(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  }

  return models;
};

export default async (app) => {
  if (!database) {
    const config = app.config;
    const sequelize = new Sequelize(config.database, config.username, config.password, config.params);
    const models = await loadModels(sequelize);
    database = { sequelize, Sequelize, models };
    await sequelize.sync({force: true});
  }
  return database;
};
