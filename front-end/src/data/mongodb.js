const hapi_url = 'http://localhost:8811';
const senate_route = '/v1/senators';

export const getSenators = async () => {
    let results = "found no senators";
    await fetch(hapi_url + senate_route, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => results = response.json())
        .catch(error => console.log("Error: ", error))
        .then(response => console.log("Success: ", response));
    return results;
};