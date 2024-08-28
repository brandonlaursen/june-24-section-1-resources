// Your code here
//!!START
function addShoppingItem(event) {
  event.preventDefault();

  const shoppingList = document.getElementById("shopping-list");

  const name = document.getElementById("name");

  const type = document.getElementById("type");

  const li = document.createElement("li");

  li.innerText = name.value;

  li.dataset.type = type.value;
  // li.setAttribute("data-type", type.value);

  shoppingList.appendChild(li);

  name.value = "";

  type.value = "dairy";
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("add").addEventListener("click", addShoppingItem);

  // adding a click event listener on the submit button has the same behavior
  // as adding a submit event listener on the form itself
  // document.querySelector("form")
  //     .addEventListener("submit", addShoppingItem);
});
//!!END
