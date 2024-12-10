//import kiya mysql library ko
const mysql = require('mysql2');
//load kiya environment variable ko .env se
require('dotenv').config();

//.env mein jo store kiya hai usko connect kr rhe hai db ke saath
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

//to connect to db
db.connect((err) => {
  //if error hoga connect krte time, toh it will stop and print the error
  if (err) throw err;
  console.log('Connected to MySQL Database');
});
//export kiya db ko so that we can use it in other files
module.exports = db;
