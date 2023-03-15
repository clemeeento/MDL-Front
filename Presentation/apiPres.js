const express = require("express");
const business = require("../Business/business");
const app = express();

const apiServ = {

    start : function(port) {
        app.listen(port, function(){ console.log("Serveur lancé sur le port " +port); });

        app.get("/api/customers",function(req,res){
            const customers = business.getAllCustomers();
            res.json(customers);
        });
    }

    
};


module.export = apiServ;