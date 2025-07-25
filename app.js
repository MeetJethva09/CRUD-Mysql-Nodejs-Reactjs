const express = require('express')
const dbConnection = require("./config/databaseConnection");
const path = require('path');
require('dotenv').config()
const app = express()
const cors = require('cors')

let PORT = process.env.PORT;

app.use(express.json());

app.use(cors({
    origin : 'http://localhost:5173'
}))

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname , 'public')));

app.get('/' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'public' , 'index.html'))
})

app.post('/login', (req,res)=>{
    
    let eid = req.body.eid;
    let name  = req.body.name;
    let age = req.body.age;
    console.log(eid,name,age);
    try{
         dbConnection.query(`INSERT INTO employees VALUES (? ,? ,?)`,[eid,name,age] ,(err,result)=>{
            if(err) console.log(err);
            else
            {
                res.send(result);
            }
        });
    }
    catch(err) 
    {
        console.log("Error while inserting data into database...");
    }
})

app.get('/fetch' , (req,res) =>{
    try{
            let data = dbConnection.query("SELECT * FROM EMPLOYEES" ,(err , result)=>{
                if(err) console.log(err);
                else{

                    res.status(200).json({
                        message : "Fetched..",
                        data : result
                    })
               }
            })
    }
    catch(err)
    {
        console.log(err);
    }
})

app.delete('/delete/:id' ,  (req,res) =>{
    let sqlquery = 'DELETE FROM EMPLOYEES WHERE EID = ?'
    const deleteData = dbConnection.query(sqlquery , [req.params.id] , (err,result)=>{
        res.status(201).json({
            message : "data deleted..",
            data : result
        })
    })
})

app.get("/userEid/:eid" , (req,res) =>{
    let sqlquery = 'SELECT * FROM EMPLOYEES WHERE EID = ?'
    const updateData = dbConnection.query(sqlquery , [req.params.eid] , (err,result)=>{
        res.status(200).json({
            message : "update success",
            data : result
        })
    })
})


app.put('/update/:eid', (req,res) =>{
    console.log(req.body);
    let {NAME , AGE , EID} = req.body;
    console.log(NAME,AGE,EID);
    let sqlquery = 'UPDATE  EMPLOYEES SET  NAME = ? , AGE = ? WHERE EID = ? ';
    let updateDatas = dbConnection.query(sqlquery , [NAME, AGE , EID] , (err , result)=>{
        if(err) console.log(err);
        else 
        {
            res.status(200).json({
                message : "Update success ..",
                data : result
            })
        }
    }); 
});


app.listen(PORT , (req,res) =>{
    console.log(`Server intialized on http://localhost:${PORT}`);
});
