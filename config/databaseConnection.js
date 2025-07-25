const mysql = require('mysql')
require('dotenv').config();

const connection = mysql.createConnection({
    host : 'localhost' || process.env.DBHOST,
    user : 'root' || process.env.DBUSER,
    password : "" || process.env.DBPASSWORD,
    database : "emp" || process.env.DATABASE
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

