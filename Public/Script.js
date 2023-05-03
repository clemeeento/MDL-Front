async function getAjaxResponse(url) {
    return new Promise(function(resolve, reject) {
        $.get(url, {}, function(data, status, xhr) {
            if (status == "success") {
                resolve(data);
            } else {
                reject(Error(xhr.statusText));
            }
        }, "json");
    });
}



addEventListener("DOMContentLoaded", async function () {
    console.log("Le document est chargé");
    const url = "http://localhost:3001/api/customers";
    const data = await getAjaxResponse(url);
    const users = JSON.parse(data);
    $("#client").loadTemplate($("#tmpClient"),users);
});