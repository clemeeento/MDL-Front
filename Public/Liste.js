/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var page = 1;
const number = 20;

document.addEventListener("DOMContentLoaded", async function() {
    table(number,1);
    menuDeroulant();
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

function detelCustomer(customerid) {
    const url="http://localhost:3001/api/customers/"+customerid;
    $.ajax({
        url: url,
        type: "delete",
        success: function(result) {
            console.log("Modification effectuée avec succès!");
            window.location.href = "Liste.html";
        },
        error: function(err) {
            console.error("Erreur lors de la modification:", err);
        }
    });
}


async function table(number,page){
    const resp = await getCustomers(number,page);
    
    const customers = resp.result;
    
    const tableBody = document.getElementById("customers");
      
    
    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];

        const row = tableBody.insertRow();

        const lastCell = row.insertCell();
        lastCell.innerHTML = customer.last;

        const firstCell = row.insertCell();
        firstCell.innerHTML = customer.first;

        const companyCell = row.insertCell();
        companyCell.innerHTML = customer.company;

        const countryCell = row.insertCell();
        countryCell.innerHTML = customer.country;

        const emailCell = row.insertCell();
        emailCell.innerHTML = customer.email;

        const modifCell = row.insertCell();
        const modifLink = document.createElement("a");
        modifLink.innerText = "Modifier";
        modifLink.href = "Modifier.html";
        modifCell.appendChild(modifLink);
        modifCell.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "Modifier.html?number=" + customer.id;
        });

        const suppCell = row.insertCell();
        const suppLink = document.createElement("a");
        suppLink.innerText = "Supprimer";
        suppLink.href = "#";
        suppCell.appendChild(suppLink);
        suppCell.addEventListener("click", (event) => {
            event.preventDefault();
            detelCustomer(customer.id);
        });
    }
}



function clearTable() {
    const tableBody = document.getElementById("customers");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}

function pageSuivante(){
    page=page+1;
    clearTable();
    table(number,page);
    selectNumber.value = page;
}

function pagePrecedente(){
    page=page-1;
    clearTable();
    table(number,page);
    selectNumber.value = page;
}

async function menuDeroulant(){
    const resp = await getCustomers(number,1);
    const pages = resp.totalPages;
    const selectNumber = document.getElementById("selectNumber");
    
    for (let i = 1; i <= pages; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        selectNumber.add(option);
    }
    selectNumber.value = page;
    
    selectNumber.addEventListener("change", (event) => {
        let data = event.target.value;
        page=parseInt(data);
        clearTable();
        table(number,page);
    });

}

