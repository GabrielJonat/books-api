import sequelize, { Sequelize } from 'sequelize'
import fs from 'fs'
import path from 'path'

let database = null

const loadModels = (sequelize) => {
    const dir = path.join(__dirname,'../models')
    let models = [];
    var model
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir,file)
        model = sequelize.import(modelDir)
        models[model.name] = model;
    });
    return models;
}

export default (app) => {
    if(!database){
        const config = app.config,
        sequelize = new Sequelize(config.database, config.username, config.password, config.params);
        database = {sequelize, Sequelize, models: {}};
        sequelize.sync().done(() => {
            return database;
        });
    }
    return database;
}