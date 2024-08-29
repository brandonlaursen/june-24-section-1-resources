import { buildCommentsContainer, handleCommentSubmit } from "./comments.js";
import { buildImageContainer, getNewCatImage } from "./image.js";
import { buildStorage } from "./storage.js";
import { BuildVotesContainer, handleUpVote } from "./votes.js";

const buildPage = () => {
  // selecting the body element from the DOM to append any newly created elements
  const body = document.querySelector("body");
  // creating the heading element to  render our cat image title
  const heading = document.createElement("h1");
  heading.innerText = "Kitten Pic";

  // PHASE 2: create a new cat button for getting new image
  const newCatButton = document.createElement("button");
  newCatButton.setAttribute("id", "new-cat");
  newCatButton.style.marginBottom = "5px";
  newCatButton.innerText = "Get New Cat";
  // giving our body some styling
  body.style.width = "100&";
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.alignItems = "center";

  // appending the created heading element and cat button to the body
  body.append(heading, newCatButton);

  // Calling build image container here in the order I want the elements to display (TOP DOWN)
  buildImageContainer();
  BuildVotesContainer();
  buildCommentsContainer();
  buildStorage();

  // add an event listener for new cat image
  newCatButton.addEventListener("click", async () => {
    await getNewCatImage();
    return;
  });
};

// using async to await the fetching of the image before giving content to
// the fetch image function
const loadPage = async () => {
  buildPage();

  //event handling functions are called but don't run the main code until an event is triggered
  handleCommentSubmit();
  handleUpVote();
};

window.onload = loadPage;
