const express = require("express");
const app = express();
const port = 3000;

function main()
{
    app.get("/",(req,res)=>{
        const dt = new Date();
        res.send("Hello ! " + dt);
        console.log(dt);
    });
    app.listen(port, function(){ console.log("Serveur lancé sur le port " +port); });
}

main();