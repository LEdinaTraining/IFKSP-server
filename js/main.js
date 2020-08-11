//Get data from the server.
function getServerdata(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

     return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}
getServerdata("http://localhost:3000/users").then(
    data => console.log(data)
);