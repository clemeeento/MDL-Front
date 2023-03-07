const fs = require("fs");

function getData()
{
    let users = fs.readFileSync("users.json");
    const tableau = JSON.parse(users);
    return tableau;
}

addEventListener("DOMContentLoaded",function () {
    console.log("Le document est chargé");
    $("#client").loadTemplate($("#tmpClient"),getData());
});