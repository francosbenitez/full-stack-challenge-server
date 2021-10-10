const dbConfig = require("../config/index.jsx");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./User.jsx')(sequelize, Sequelize);
db.operation = require('./Operation.jsx')(sequelize, Sequelize);

db.user.hasMany(db.operation, {foreignKey: "user_id"});
db.operation.belongsTo(db.user, {foreignKey: "user_id"});

module.exports = db;