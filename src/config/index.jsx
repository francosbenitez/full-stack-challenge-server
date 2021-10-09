require('dotenv').config();

module.exports = {
    HOST: "budget-db.cfd0h5xpluom.us-east-2.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "42334770",
    DB: "budget_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};