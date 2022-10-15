const dbConfig = require("../config/db.config");
const Sequalize = require("sequelize");

const sequalize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.sequalize = sequalize;
db.Sequalize = Sequalize;
db.todos = require("./Todo.js")(sequalize, Sequalize);

module.exports = db;
