/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
addEventListener("DOMContentLoaded",
    async function(){
        // Récupération des variables passées via l'URL
        const id = processUser(); 
        // Chargement du client à modifier
        client(1,id);
    });


function getCustomers(number, page){
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/api/customers?number=" + number + "&page=" + page; 
        $.get( url, {} )
            .done(function( data ) {
                resolve(data);
            })
            .fail(function(error) {
                reject(new Error(`Une erreur est survenue lors de la récupération des données: ${error.statusText}`));
            }); 
    }); 
}


function modifCustomer(customer) {
    const url="http://localhost:3001/api/customers";
    console.log(customer);
    $.ajax({
        url: url,
        type: "put",
        data: customer,
        success: function(result) {
            console.log("Modification effectuée avec succès!");
            window.location.href = "Liste.html";
        },
        error: function(err) {
            console.error("Erreur lors de la modification:", err);
        }
    });
}

function processUser()
{
    // Récupère ce qu'il y a après le & dans l'URL
    var parameters = location.search.substring(1).split("&");
    // Divise la partie gauche et droite du égal
    var temp = parameters[0].split("=");
    // Récupère la valeur de la variable
    const id = decodeURIComponent(temp[1]);
    return id;
}

async function listenModif(id)
{   
    // Prépare les données
    const customer = {
        "id" : id,
        "first" : document.getElementById("first").value,   
        "email" : document.getElementById("email").value,
        "last" : document.getElementById("last").value,
        "company" : document.getElementById("company").value,
        "country" : document.getElementById("country").value};

    // Modification des données sur le serveur
    modifCustomer(customer); 
}

async function client(number,page){
    const resp = await getCustomers(number,page);
    
    const data = resp.result;

    const customer = data[0];

    document.getElementById("last").value = customer.last;
    document.getElementById("first").value = customer.first;
    document.getElementById("email").value = customer.email;
    document.getElementById("company").value = customer.company;
    document.getElementById("country").value = customer.country;
    
}