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

  // return fetch('/dogs', {
  //     method: "GET",
  //     headers: {"Content-Type": null},
  //     body: null
  // });

  return fetch("/dogs");
  // return fetch('/dogs', {
  //     method: "GET",
  //     headers: {"Content-Type": null},
  //     body: null
  // })
}

export function getDogNumberTwo() {
  // Your code here

  return fetch("/dogs/2");
}

export function postNewDog() {
  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name: "little bear",
      age: 17,
    }),
  });
}

export function postNewDogV2(name, age) {
  return fetch("/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      name,
      age,
    }),
  });
}

export function deleteDog(id) {
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: {
      AUTH: "ckyut5wau0000jyv5bsrud90y",
    },
  });
}
