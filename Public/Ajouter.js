/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

function addCustomer(customer) {
    const url="http://localhost:3001/api/customers";
    return new Promise((resolve, reject) => {
        $.post(url, customer)
            .done(function(data){
                resolve(data.result);
            })
            .fail(function(error) {
                reject(new Error(`Une erreur est survenue lors de l'envoie des données': ${error.statusText}`));
            });
    });
}

async function listenAjouter()
{   
    // Prépare les données
    const customer = {
        "first" : document.getElementById("first").value,   
        "email" : document.getElementById("email").value,
        "last" : document.getElementById("last").value,
        "company" : document.getElementById("company").value,
        "country" : document.getElementById("country").value,
        "created_at" : new Date()};
        
    addCustomer(customer); 
}