let page = 1;
const number = 15;

function getAjaxResponse(number, page){
  return new Promise((resolve, reject) => {
      const urlApi = "http://localhost:3001/api/customers?number=" + number + "&page=" + page; 
      $.get( urlApi, {} )
      .done(function( data ) {
          resolve(data);
      })
      .fail(function(error) {
          reject(new Error(`Une erreur est survenue lors de la récupération des données: ${error.statusText}`));
      }); 
  }); 
}

async function table(number,page){
  const resp = await getAjaxResponse(number,page);
  
  const customers = resp.result;
  
  const tableBody = document.getElementById("customers");
    
  
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    const row = tableBody.insertRow();

    // const idCell = row.insertCell();
    // idCell.innerHTML = customer.id;

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
    const modifLink = document.createElement('a');
    modifLink.innerText = 'Modifier';
    modifLink.href = 'Modifier.html';
    modifCell.appendChild(modifLink);
    modifCell.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = 'Modifier.html';
    });

    const suppCell = row.insertCell();
    const suppLink = document.createElement('a');
    suppLink.innerText = 'Supprimer';
    suppLink.href = '#';
    suppCell.appendChild(suppLink);
    suppCell.addEventListener('click', (event) => {
      event.preventDefault();
      supprimer(customer.id);
    });
    // const createdAtCell = row.insertCell();
    // createdAtCell.innerHTML = customer.created_at;
  }
}

function supprimer(customerid) {
  const url="http://localhost:3001/api/customers";
  $.ajax({
      url: url,
      type: 'DELETE',
      data: customerid,
      success: function(result) {
        console.log('Modification effectuée avec succès!');
        // Redirection vers la page d'accueil
        // window.location.href = "Liste.html";
      },
      error: function(err) {
        console.error('Erreur lors de la modification:', err);
      }
  });
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
}

function pagePrecedente(){
  page=page-1;
  clearTable();
  table(number,page);
}


document.addEventListener("DOMContentLoaded", async function() {
  
  table(number,1);
    
});
