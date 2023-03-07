const express = require("express");
const app = express();
const port = 3000;

function main()
{
    app.listen(port, function(){ console.log("Serveur lancé sur le port ${port}"); });
}

main();