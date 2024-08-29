// Build a comment container for any comment related elements
export const buildCommentsContainer = () => {
  // selecting the body element to append the new container to
  const body = document.querySelector("body");

  // create comments container and give some attributes for easy selection
  const commentContainer = document.createElement("div");
  commentContainer.setAttribute("id", "comment-container");

  commentContainer.style.marginBottom = "5%";

  // add a title for comment container
  const heading = document.createElement("h2");
  heading.innerText = "Comments";

  // append the heading and comment container to the body in the correct order
  body.append(heading, commentContainer);

  // comment container exists so now we can call comment box to render
  commentBox();
};

// Build a comment box for specifically holding the comments
export const commentBox = () => {
  // select the comment container to append the comment box to
  const commentContainer = document.getElementById("comment-container");

  // create the container for holding the comments
  const comments = document.createElement("div");

  // set comments attribute for easy selection
  comments.setAttribute("id", "comment-box");

  // check comments in local storage
  const storageComments = JSON.parse(localStorage.getItem("comments"));

  // if there are comments in the local storage, iterate and create 'span' elements
  // using the createCommentElements function
  if (storageComments) {
    storageComments.forEach(([storedDate, storedComment]) => {
      let [comment, commentDate] = createCommentElements();
      commentDate.innerText = storedDate;
      comment.innerText = storedComment;
      comments.append(commentDate, comment);
    });
  }
  // create some styles for the comment box
  comments.style.border = "1px solid black";
  comments.style.boxSizing = "border-box";
  comments.style.width = "400px";
  comments.style.height = "300px";
  comments.style.display = "flex";
  comments.style.flexDirection = "column";
  comments.style.padding = "10px 5px";
  comments.style.overflowY = "auto";
  comments.style.overflowWrap = "break-word";

  // append the comments to comment container
  commentContainer.appendChild(comments);
  // render input container
  inputContainer();
};

// Build an input container
export const inputContainer = () => {
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
  const commentInputField = document.createElement("input");

  // set attribute for input
  commentInputField.setAttribute("id", "comment-input");

  // set styles for comment input
  commentInputField.style.width = "75%";
  // create button for submitting comment
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";

  // set attributes for submit button
  submitButton.setAttribute("id", "submit-button");

  // set styles for submit button
  submitButton.style.width = "20%";

  // append the input and button elements to the comment container
  inputContainer.append(commentInputField, submitButton);
  commentBox.appendChild(inputContainer);
};

// helper function for creating  comment elements
const createCommentElements = () => {
  //  create two elements, 1 for date and 1 for comment (date element is optional)
  const comment = document.createElement("span");
  const commentDate = document.createElement("span");

  // give the elements some styles
  comment.style.boxSizing = "border-box";
  comment.style.margin = "3px 0px";
  comment.style.borderBottom = "1px solid rgba(0,0,0,0.4)";
  comment.style.padding = "2px";
  comment.style.fontSize = "20px";

  commentDate.style.fontSize = "14px";

  // return the pair of created elements
  return [comment, commentDate];
};

// create a helper function for adding comments
export const addComment = (inputValue) => {
  // select the comment box to append new comments
  if (inputValue.length === 0) return;
  const commentBox = document.getElementById("comment-box");

  //  create a comment new date and container
  const [comment, commentDate] = createCommentElements();

  const newInputDate = new Date().toLocaleTimeString();

  comment.innerText = inputValue;
  commentDate.innerText = newInputDate;

  let storageComments = JSON.parse(localStorage.getItem("comments"));

  // grouping  the comment date and comment value
  storageComments.push([newInputDate, inputValue]);
  // append comment to comment box after setting the newly added comment to local storage
  localStorage.setItem("comments", JSON.stringify(storageComments));
  commentBox.append(commentDate, comment);
};

// create a function for submitting comments
export const handleCommentSubmit = () => {
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
