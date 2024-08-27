





export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  // console.log(bodyChildElements);

  // [...bodyChildElements].forEach(node => console.log(node));

  const div = bodyChildElements[0];
  // console.log("div:", div);

  const divChildElements = div.children; // HTMLCollection [span]
  // console.log("divChildElements:", divChildElements);

  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  // console.log(helloWorld);

  const span = divChildElements[0]; // <span>Yes!</span>
  // console.log(span);
  // debugger
};
