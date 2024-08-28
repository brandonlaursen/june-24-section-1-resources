const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);

    createMainContent();
    createScoreContainer();
    createCommentContainer();

    if (localStorage.url) {
        document.querySelector("img").src = localStorage.url;
        document.querySelector('.score').innerHTML = localStorage.score;
        renderComments(JSON.parse(localStorage.comments));
    } else {
        fetchImage();
    }
}

const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create new pic button
    const newPicBtn = document.createElement("button");
    newPicBtn.id = "new-pic";
    newPicBtn.innerText = "New Pic!";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(newPicBtn);
    container.appendChild(img);
}

const createScoreContainer = () => {
    // Create score container
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    // Create score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity Score: ";

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = "0";

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    // Create upvote/downvote buttons
    const buttonContainer = document.createElement("div");

    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "Upvote";

    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "Downvote";
    downvoteBtn.style.marginLeft = "5px";

    buttonContainer.appendChild(upvoteBtn);
    buttonContainer.appendChild(downvoteBtn);

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(buttonContainer);

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
}

const createCommentContainer = () => {
    // Create form
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.style.margin = "20px";
    commentForm.style.display = "flex";
    commentForm.style.width = "100%";
    commentForm.style.justifyContent = "center";
    commentForm.style.alignItems = "center";

    // Create comment input
    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";
    userCommentContainer.style.marginRight = "10px";

    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: ";

    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a comment... ";
    commentInput.required = true;

    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    // Create submit button
    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment"
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    commentForm.appendChild(userCommentContainer);
    commentForm.appendChild(submitBtn);

    // Create comments section
    const comments = document.createElement("div");
    comments.className = "comments";
    comments.style.border = "solid grey 1px";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";

    const container = document.querySelector(".container");
    container.appendChild(commentForm);
    container.appendChild(comments);
}

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();

        localStorage.setItem("url", kittenData[0].url);
        localStorage.setItem("score", 0);
        localStorage.setItem("comments", JSON.stringify([]));

        document.querySelector("img").src = kittenData[0].url;
        document.querySelector('.score').innerHTML = 0;
        document.querySelector('.comments').innerHTML = '';
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
}

const vote = e => {
    if (e.target.id === "upvote") {
        localStorage.score = parseInt(localStorage.score) + 1;
    } else {
        localStorage.score = parseInt(localStorage.score) - 1;
    }
    document.querySelector('.score').innerHTML = localStorage.score;
}

const submitComment = e => {
    e.preventDefault();
    const commentForm = document.querySelector('.comment-form');
    const formData = new FormData(commentForm);

    const commentText = formData.get("user-comment");
    commentForm.reset();

    const storedComments = JSON.parse(localStorage.comments);
    storedComments.push(commentText);
    localStorage.comments = JSON.stringify(storedComments);

    const comment = createComment(commentText, storedComments.length - 1);

    const comments = document.querySelector(".comments");
    comments.appendChild(comment);
}

const createComment = (comment, i) => {
    const newCommentContainer = document.createElement('div');
    newCommentContainer.style.display = "flex";
    newCommentContainer.style.margin = "10px";

    const newComment = document.createElement("p");
    newComment.innerText = comment;

    const deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.style.marginLeft = "15px";
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener("click", e => deleteComment(e));

    newCommentContainer.appendChild(newComment);
    newCommentContainer.appendChild(deleteButton);
    return newCommentContainer;
}

const renderComments = comments => {
    const commentsContainer = document.querySelector(".comments");
    commentsContainer.innerHTML = "";
    comments.forEach((comment, i) => {
        commentsContainer.appendChild(createComment(comment, i));
    });
}

const deleteComment = e => {
    console.log(e.target);
    const storedComments = JSON.parse(localStorage.comments);
    storedComments.splice(parseInt(e.target.id), 1);
    localStorage.comments = JSON.stringify(storedComments);

    renderComments(storedComments);
}

window.onload = async () => {
    initializePage();

    document.getElementById("new-pic").addEventListener("click", fetchImage);
    document.getElementById("upvote").addEventListener("click", e => vote(e));
    document.getElementById("downvote").addEventListener("click", e => vote(e));
    document.getElementById("submit-comment").addEventListener("click", e => submitComment(e));
}