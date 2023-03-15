const apiServ = require("./Presentation/apiPres");
const port = 3000;

function main()
{
    //app.use(express.static("Public"));

    apiServ.start(port);
}

main();