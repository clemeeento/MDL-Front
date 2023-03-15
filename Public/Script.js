function getData()
{
    const tableau = 
    [{"id":1,"email":"isidro_von@hotmail.com","first":"Torrey","last":"Veum","company":"Google","created_at":"2014-12-25T04:06:27.981Z","country":"Switzerland"},
        {"id":2,"email":"frederique19@gmail.com","first":"Micah","last":"Sanford","company":"Google","created_at":"2014-07-03T16:08:17.044Z","country":"Democratic People's Republic of Korea"},
        {"id":3,"email":"fredy54@gmail.com","first":"Hollis","last":"Swift","company":"Microsoft","created_at":"2014-08-18T06:15:16.731Z","country":"Tunisia"},
        {"id":4,"email":"braxton29@hotmail.com","first":"Perry","last":"Leffler","company":"Microsoft","created_at":"2014-07-10T11:31:40.235Z","country":"Chad"},
        {"id":5,"email":"turner59@gmail.com","first":"Janelle","last":"Hagenes","company":"Amazon","created_at":"2014-04-21T15:05:43.229Z","country":"Swaziland"}];
    return tableau;
}

addEventListener("DOMContentLoaded",function () {
    console.log("Le document est chargé");
    $("#client").loadTemplate($("#tmpClient"),getData());
});