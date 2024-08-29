import { clearStorageValues } from "./storage.js";

export const buildImageContainer = () => {
  // selecting a live element in the DOM to append the container to
  const body = document.querySelector("body");

  //creating a div to hold the cat image as its container
  const catImageContainer = document.createElement("div");

  //giving the cat image container an id for easy selection
  catImageContainer.setAttribute("id", "cat-image-container");

  //appending image element to the body element
  body.appendChild(catImageContainer);
  createImageElement();
};

const createImageElement = async () => {
  // select the container to append the image to
  let catImage = localStorage.getItem("catImage");

  const imageContainer = document.getElementById("cat-image-container");

  // creating an image element and setting attributes
  const imageElement = document.createElement("img");
  imageElement.setAttribute("id", "cat-image");
  imageElement.setAttribute("data-name", "catImage");

  // reloads cat image value from local storage
  if (catImage) {
    imageElement.setAttribute("src", catImage);
  } else {
    // this fetches an image and stores it in local storage 
    await fetchImage(); 
    imageElement.setAttribute("src", localStorage.getItem("catImage"));
  }

  // giving our image some styling
  imageElement.style.width = "300px";
  imageElement.style.height = "300px";

  // appending the newly created image element to our image container
  imageContainer.appendChild(imageElement);
};

// sets cat image to local storage and returns a catUrl
export const fetchImage = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    const data = await response.json();
    // the data comes back as an array so we must index in to get the url
    const catImage = data[0].url;
    // this function should do its job of fetching an image and returning
    // the url
    localStorage.setItem("catImage", catImage);

    return catImage;
  } catch {
    alert(new Error("Image could not be loaded..."));
  }
};

export const fetchNewImage = async () => {
  // select image tag to set src to new image
  const catImage = document.getElementById("cat-image");

  // fetch a new cat
  const newCatImage = await fetchImage();

  // set the src to the return value of a successful fetch
  if (newCatImage) catImage.src = newCatImage;
};

// created a helper function for clearing element values / content
const clearDataValuesOnFetch = () => {
  // reset the count variables to 0
  const resetCount = 0;
  // select the upvote and downvote elements and reset their values
  const upVote = document.getElementById("up-vote");
  const downVote = document.getElementById("down-vote");

  upVote.innerText = `Up Vote ${resetCount}`;
  downVote.innerText = `Down Vote ${resetCount}`;

  upVote.dataset.count = resetCount;
  downVote.dataset.count = resetCount;

  // select the comment box element and set the inner text to an empty string
  const commentBox = document.getElementById("comment-box");
  commentBox.innerText = "";
};

// The get new cat image clears storage, clears data values, and sets a new image without recreating any dom elements
export const getNewCatImage = async () => {
  clearStorageValues();
  clearDataValuesOnFetch();
  await fetchNewImage();
};
