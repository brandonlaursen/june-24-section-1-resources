

/*

    Fetch
     - The Fetch API provides an interface for fetching resources (including across the network)
    * The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:
    * url = "", data = {}
    * can specify data of the request
    * if request is a post we can specify the headers and the body
    * if request is a get we only need the url
    ! assessment will be like this, setting up the data endpoints for the fetch, no building out routes

*/


export function getAllDogs() {
    // Your code here

    return fetch('/dogs', {
        method: "GET",
        headers: {"Content-Type": null},
        body: null
    });
    // return fetch('/dogs', {
    //     method: "GET",
    //     headers: {"Content-Type": null},
    //     body: null
    // })
}

export function getDogNumberTwo() {
    // Your code here
}

export function postNewDog() {
    // Your code here
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}
