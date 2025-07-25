const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
    host : process.env.DBHOST,
    user : process.env.DBUSER,
    password : process.env.DBPASSWORD,
    database :  process.env.DATABASE
})

connection.connect((err) =>{
    try{
        console.log("Database connectivity successfull");
    }
    catch(err)
    {
        console.log("Error occured while connecting Database..")
    }
    });
module.exports = connection;

