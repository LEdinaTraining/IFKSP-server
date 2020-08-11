//Get data from the server.
function getServerdata(url) {
    let fetchOptions = {
        method: "GET",
        mode: "cors",
        cache: "no-cache"
    };

     fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    ).then(
        data => console.log(data)
    );
}