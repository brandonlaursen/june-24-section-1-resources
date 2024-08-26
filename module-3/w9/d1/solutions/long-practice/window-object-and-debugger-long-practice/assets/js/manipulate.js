//!!ADD
// function changeTitle() {
//!!END_ADD
//!!START SILENT
export function changeTitle() {
//!!END
    // Change the title of the page to "(Your name)'s Portfolio"

    //!!START
    window.document.title = "My Portfolio";
    //!!END
}

//!!ADD
// function changeHeader() {
//!!END_ADD
//!!START SILENT
export function changeHeader() {
//!!END
    // Change the name in the h1 of the page to your name

    //!!START
    const body = document.body;
    const header = body.children[0]
    const h1 = header.children[0]
    h1.innerText = "I am (your name)";
    //!!END
}

//!!ADD
// function changeAboutMe() {
//!!END_ADD
//!!START SILENT
export function changeAboutMe() {
//!!END
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    //!!START
    const body = document.body;
    const aboutMe = body.children[1];
    const firstParagraph = aboutMe.children[1];
    firstParagraph.innerText = "Insert some cool facts about yourself here";
    //!!END
}
