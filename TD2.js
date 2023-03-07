const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

function main()
{
    app.get("/",(req,res)=>{
        res.sendFile(path.join("C:/Users/Administrateur/Documents/MethodeDeveloppementLogiciel/TDs/TD2/HTML","Home.html"));});
    app.listen(port, function(){ console.log("Serveur lancé sur le port " +port); });
}

main();