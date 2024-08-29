// set the local storage properties here
export const buildStorage = () => {
  const { catImage, upVote, downVote, comments } = localStorage;

  localStorage.setItem("catImage", catImage ? catImage : "");
  localStorage.setItem("upVote", upVote ? upVote : 0);
  localStorage.setItem("downVote", downVote ? downVote : 0);
  localStorage.setItem("comments", comments ? comments : JSON.stringify([]));
};

// resets local storage values
export const clearStorageValues = () => {
  localStorage.clear();
  buildStorage();
};
