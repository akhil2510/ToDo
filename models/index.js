import Sequelize from 'sequelize';
import ToDo from './todo.js'
import User from './user.js'
import ToDoItems from './todoItems.js';

const db = new Sequelize(env().PG_DATABASE, env().PG_USER, env().PG_PASSWORD, {
  host: env().PG_HOST,
  port: env().PG_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 5000,
  },
});

db.ToDo = ToDo.init(db)
db.User=User.init(db)
db.ToDoItems = ToDoItems.init(db)

// one user can have many todo tasks but one todo can have one user
db.User.hasMany(db.ToDo,{onDelete:'cascade'})
db.ToDo.belongsTo(db.User)

// one todo can have many todo items but one todo item can be belongs to one todo
db.ToDo.hasMany(db.ToDoItems, { onDelete: "cascade" });
db.ToDoItems.belongsTo(db.ToDo);

export default db;


async function createTable(db) {
    // await db.ToDo.sync({alter:true})
    // await db.User.sync({alter:true})
    // await db.ToDoItems.sync({alter:true})
}

//run this funcction to create table or update table

// try{
//     fun(db)
//     .then((res)=>{console.log("table create")})
//     .catch((err)=>{console.log("error creating table")})
// }
// catch(err){console.log("error creating table")}