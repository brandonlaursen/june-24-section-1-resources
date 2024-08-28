//!!START

window.addEventListener("DOMContentLoaded", () => {
  alert("DOM LOADED");

  /******************************  Section 1 ******************************/

  const redInput = document.getElementById("red-input");

  const changeRed = (e) => {
    let value = e.target.value.trim().toLowerCase();

    if (value === "red") {
      redInput.style.backgroundColor = "red";
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  redInput.addEventListener("input", changeRed);

  /******************************  Section 2 ******************************/

  const addItem = document.getElementById("add-item");

  const ul = document.querySelector("#section-2 > ul");

  const addLi = (e) => {
    e.preventDefault();

    const input = document.querySelector("#list-add");

    const value = input.value;

    const newLi = document.createElement("li");

    newLi.innerText = value;

    ul.appendChild(newLi);

    input.value = "";
  };

  addItem.addEventListener("click", addLi);

  /******************************  Section 3 ******************************/

  const colorSelect = document.getElementById("color-select");

  const changeColor = (e) => {
    const section = document.getElementById("section-3");

    section.style.backgroundColor = e.target.value;
  };

  colorSelect.addEventListener("change", changeColor);

  // colorSelect.addEventListener("input", changeColor);

  /******************************  Section 4 ******************************/

  const removeListeners = document.getElementById("remove-listeners");

  removeListeners.addEventListener("click", (e) => {
    redInput.removeEventListener("input", changeRed);
    addItem.removeEventListener("click", addLi);
    colorSelect.removeEventListener("change", changeColor);
  });
});
//!!END
