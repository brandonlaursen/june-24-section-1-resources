/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");

add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    // console.log(data);

    const url = data.message; // URL of new dog image
    // console.log(url);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    const breed = url.split("/")[4];
    // console.log(breed);

    // create li
    // <li></li>
    const li = document.createElement("li");

    li.style.border = "5px solid red";

    // create figure
    // <figure></figure>
    const figure = document.createElement("figure");

    // create image
    // <img/>
    const img = document.createElement("img");

    // set the image.src = url
    // <img src='url' />
    img.src = url;

    // create the caption
    // <figcaption></figcaption>
    const figCaption = document.createElement("figcaption");

    // set the caption inner text = breed
    // <figcaption> breed </figcaption>
    figCaption.innerText = breed;

    //<figure> <img src='url' /> </figure>
    // append the image to the figure
    figure.appendChild(img);

    // append the figcaption to the figure
    figure.appendChild(figCaption);

    // append the figure to the li
    li.appendChild(figure);

    // append the li to ul
    const ul = document.querySelector("ul");
    // const firstNode= document.querySelector("ul")[0];

    // ul.insertBefore(li, firstNode);
    ul.appendChild(li);

    // ul.innerHTML += `
    //     <li>
    //       <figure>
    //         <img
    //           src="${url}"
    //         />
    //         <figcaption>${breed}</figcaption>
    //       </figure>
    //     </li>
    //     `;

    // use selector to find the ul
    // than append li to ul using .appendChild()

    /*






*/
    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */

  const firstDog = document.querySelector("li");

  if (firstDog) {
    firstDog.remove();
  } else {
    console.log("no dogs left");
  }

  // .remove()
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */

  const allDogs = document.querySelectorAll("li");
  //   console.log(allDogs);

  const lastDog = allDogs[allDogs.length - 1];

  if (lastDog) {
    lastDog.remove();
  } else {
    console.log("no dogs left!");
  }
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
