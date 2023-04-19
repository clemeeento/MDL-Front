const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

function main()
{
    app.use(bodyParser.json());
    app.use(cors());

    app.use(express.static("Public"));  
    app.use(cors());
    app.listen(port, function(){ console.log("Serveur lancé sur le port " +port); });
}

main();
 