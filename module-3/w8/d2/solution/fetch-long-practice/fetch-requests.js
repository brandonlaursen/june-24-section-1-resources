/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

//!!START
fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
//!!END



/* ============================== Phase 2 ============================== */

//!!START
fetch("/products", {
  method: "POST",
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    status: res.status, // 200
    location: res.headers.get('Location'), // undefined
    redirected: res.redirected, // true
    url: res.url // /products/2
  });
});
//!!END



/* ============================== Phase 3 ============================== */

//!!START
const params = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery",
  categories: 'health'
});
// params.append("categories", "health"); // if you want to add other categories
fetch("/products", {
  method: "POST",
  body: params,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(res => {
  console.log({
    redirected: res.redirected // true
  });
});
//!!END

