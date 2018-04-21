const hapi_url = 'https://fullstack-senators-example-frytudbvft.now.sh';
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

export const postSenators = async (senators) => {
    let results = "something went wrong in the POST process";
    await fetch(hapi_url + senate_route, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(senators)
    }).then(response => results = response.json())
        .catch(error => console.log("Error: ", error))
        .then(response => console.log("Success: ", response));
    return results;
};
