// Your code here
// creating an async function that is responsible for fetching
// an image and returning the image url after being parsed
// this function is async meaning wherever we call it we must handle
// it like a promise. (.then or await)

// PHASE 2: UPVOTE / DOWNVOTE Variables
// created global variables (will refactor) for resetting  upvote and downvote
let upVoteCount = 0;
let downVoteCount = 0;

const fetchImage = async () => {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");

  const data = await response.json();
  console.log("data from the response.json ", data);
  // the data comes back as an array so we must index in to get the url
  const catImageUlr = data[0].url;
  console.log("cat image url ", catImageUlr);

  // this function should do its job of fetching an image and returning
  // the url
  return catImageUlr;
};

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
};

const createImage = (imageUrl) => {
  // select the container to append the image to
  const imageContainer = document.getElementById("cat-image-container");

  // checking to see if I already have an image within the container
  // this will prevent adding multiple children to the image container
  if (!imageContainer.children[0]) {
    // creating an image element and setting an id and src attribute
    const imageElement = document.createElement("img");
    imageElement.setAttribute("id", "cat-image");

    // giving our image some styling
    imageElement.style.width = "300px";
    imageElement.style.height = "300px";

    // setting the image url coming from our fetch as the source of our image element
    imageElement.setAttribute("src", imageUrl);
    // appending the newly created image element to our image container
    imageContainer.appendChild(imageElement);
  } else {
    // this shouldn't run for now since we don't have any listeners triggering another fetch call yet
    // a good hint though on how to approach only fetching once.
    alert("Cat Image Already Created, Refresh For New Cat :)");
  }
};

const buildImageContainer = () => {
  // selecting a live element in the DOM to append the container to
  const body = document.querySelector("body");

  //creating a div to hold the cat image as its container
  const catImageContainer = document.createElement("div");

  //giving the cat image container an id for easy selection
  catImageContainer.setAttribute("id", "cat-image-container");

  //appending image element to the body element
  body.appendChild(catImageContainer);
};

// PHASE 2 --------------------------------------------------------------

const fetchNewImageButton = () => {
  // select the button for fetching a new image
  const newImageButton = document.getElementById("new-cat");
  // select image tag to set src to new image
  const catImage = document.getElementById("cat-image");
  // listen for click to await a new cat image
  newImageButton.addEventListener("click", async () => {
    clearValuesOnFetch();
    const newCatImage = await fetchImage();
    catImage.src = newCatImage;
  });
};

// build votes container for holding votes
const BuildVotesContainer = () => {
  // select the body to append the container to
  const body = document.querySelector("body");
  // create a container for holding up votes and down votes
  const votesContainer = document.createElement("div");

  // give votes container an id for unique selection
  votesContainer.setAttribute("id", "votes-container");
  // give the container some styles
  votesContainer.style.width = "300px";
  votesContainer.style.marginTop = "20px";
  votesContainer.style.display = "flex";
  votesContainer.style.justifyContent = "center";
  votesContainer.style.flexWrap = "wrap";

  // create a heading for votes container and set the inner html
  const heading = document.createElement("h2");
  heading.innerHTML = "Votes";

  // add some styles to the heading
  heading.style.textAlign = "center";
  heading.style.width = "100%";
  heading.style.margin = "0px 0px 5px";

  // append the heading to the container
  votesContainer.appendChild(heading);

  // append the votes container to the body
  body.appendChild(votesContainer);

  // render the vote buttons
  voteButtons();
};

// create a function for rendering vote buttons and handling vote logic
const voteButtons = () => {
  // select the vote container to append the buttons to
  const votesContainer = document.getElementById("votes-container");

  // create upvote and downvote buttons and set inner html
  // NOTE: we can create a container for the buttons for easier styling. For now this is okay
  const upVote = document.createElement("button");
  const downVote = document.createElement("button");

  upVote.innerHTML = "Up Vote 0";
  downVote.innerHTML = "Down Vote 0";

  // give the buttons attributes for grouping and unique selection
  upVote.setAttribute("id", "up-vote");
  upVote.setAttribute("class", "voting-buttons"); // plural naming for classes

  downVote.setAttribute("id", "down-vote");
  downVote.setAttribute("class", "voting-buttons");

  // give some styles to the buttons
  upVote.style.marginRight = "10px";
  downVote.style.marginLeft = "10px";
  // append the buttons to the votes container

  votesContainer.append(upVote, downVote);
  // this function doesn't look that dry but its purposes is to help see whats happening with our code
};

// Build a comment container for any comment related elements
const buildCommentsContainer = () => {
  // selecting the body element to append the new container to
  const body = document.querySelector("body");

  // create comments container and give some attributes for easy selection
  const commentContainer = document.createElement("div");
  commentContainer.setAttribute("id", "comment-container");

  // add a title for comment container
  const heading = document.createElement("h2");
  heading.innerText = "Comments";

  // append the heading and comment container to the body in the correct order
  body.append(heading, commentContainer);

  // comment container exists so now we can call comment box to render
  commentBox();
};

// Build a comment box for specifically holding the comments
const commentBox = () => {
  // select the comment container to append the comment box to
  const commentContainer = document.getElementById("comment-container");

  // create the container for holding the comments
  const comments = document.createElement("div");

  // set comments attribute for easy selection
  comments.setAttribute("id", "comment-box");

  // create some styles for the comment box
  comments.style.border = "1px solid black";
  comments.style.boxSizing = "border-box";
  comments.style.width = "400px";
  comments.style.height = "300px";
  comments.style.display = "flex";
  comments.style.flexDirection = "column";
  comments.style.padding = "5px";

  // append the comments to comment container
  commentContainer.appendChild(comments);
  // render input container
  inputContainer();
};

// Build an input container
const inputContainer = () => {
  // select comment box to append input field elements
  const commentBox = document.getElementById("comment-container");

  // create input elements container and set attribute
  const inputContainer = document.createElement("form");

  inputContainer.setAttribute("id", "input-form-container");

  // create styles for input container
  inputContainer.style.display = "flex";
  inputContainer.style.justifyContent = "space-between";
  inputContainer.style.width = "100%";
  inputContainer.style.marginTop = "10px";

  // create input field
  const commentInput = document.createElement("input");

  // set attribute for input
  commentInput.setAttribute("id", "comment-input");

  // set styles for comment input
  commentInput.style.width = "75%";
  // create button for submitting comment
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";

  // set attributes for submit button
  submitButton.setAttribute("id", "submit-button");

  // set styles for submit button
  submitButton.style.width = "20%";

  // append the input and button elements to the comment container
  inputContainer.append(commentInput, submitButton);
  commentBox.appendChild(inputContainer);
};

// create a helper function for adding comments
const addComment = (inputValue) => {
  // select the comment box to append new comments
  const commentBox = document.getElementById("comment-box");

  //  create a comment
  const comment = document.createElement("p");

  // give the comment some styles
  comment.style.margin = "0px";
  comment.innerText = inputValue;

  // append comment to comment box
  commentBox.appendChild(comment);
};

// create a helper function vote clicks
const handleUpVote = () => {
  // get the upvote and downvote buttons to attach listeners
  const upVoteButton = document.getElementById("up-vote");
  const downVoteButton = document.getElementById("down-vote");

  // create global count variables that won't reset to 0 after every click
  upVoteCount = 0;
  downVoteCount = 0;

  // listen for up vote button click
  upVoteButton.addEventListener("click", () => {
    if (upVoteCount >= 0) {
      upVoteCount += 1;
      handleVoteChange(upVoteCount, downVoteCount);
    }
  });

  // listen for down vote button click
  downVoteButton.addEventListener("click", () => {
    if (downVoteCount <= 0) {
      downVoteCount -= 1;
      handleVoteChange(upVoteCount, downVoteCount);
    }
  });
};

// create a helper function for handling vote change
const handleVoteChange = (upVoteVal, downVoteVal) => {
  // select vote buttons to change inner text based on click count
  const upVote = document.getElementById("up-vote");
  const downVote = document.getElementById("down-vote");

  // set the inner html of the down vote buttons to the new values
  upVote.innerHTML = `Up Vote ${upVoteVal}`;
  downVote.innerHTML = `Down Vote ${downVoteVal}`;
};

// create a function for submitting comments
const handleCommentSubmit = () => {
  // select the submit button to attach event listener
  const button = document.getElementById("submit-button");

  // listen for any click changes
  button.addEventListener("click", (e) => {
    // prevent default behavior since parent is a form element
    e.preventDefault();

    // select the comment input to get comment input value
    const commentInput = document.getElementById("comment-input");
    const inputValue = commentInput.value;

    // call helper function for handling comment and reset the value to
    // an empty string
    addComment(inputValue);
    commentInput.value = "";
  });
};

// created a helper function for clearing element values / content
const clearValuesOnFetch = () => {
  // reset the count variables to 0
  upVoteCount = 0;
  downVoteCount = 0;
  // select the upvote and downvote elements and reset their values
  document.getElementById("up-vote").innerText = `Up Vote ${upVoteCount}`;
  document.getElementById("down-vote").innerText = `Down Vote ${downVoteCount}`;

  // select the comment box element and set the inner text to an empty string
  const commentBox = document.getElementById("comment-box");
  commentBox.innerText = "";
};

// using async to await the fetching of the image before giving content to
// the fetch image function
const loadPage = async () => {
  buildPage();
  const imageUrl = await fetchImage();
  createImage(imageUrl);

  //event handling functions are called but don't run the main code until an event is triggered

  handleCommentSubmit();
  handleUpVote();
  fetchNewImageButton();
};

window.onload = loadPage;
