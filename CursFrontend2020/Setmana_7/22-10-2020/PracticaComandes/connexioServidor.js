var express = require("express");
var mysql = require("mysql");
var cors = require("cors");

var app = express()
app.use(cors())

app.get("/", (req,res) => { 
    res.send("Bondiaaaa")
})

app.get("/clients", (req,res) => {
    var con = mysql.createConnection({
        host:"217.61.130.155",
        user:"admin_test",
        password:"facilfacil",
        database:"admin_test"
    })
    con.connect(function(err){
        if(err) throw err;
        con.query("SELECT * FROM customers", function(err,resultat,fields){
            if(err) throw err;
            res.header("Content-Type", "application/json");
            res.json(resultat)
            con.end()
        })
    })
})

app.listen(3000, () => {
    console.log("Servidor connectat correctament")
})