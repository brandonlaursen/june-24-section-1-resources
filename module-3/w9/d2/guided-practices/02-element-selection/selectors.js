const select = () => {
    /* Write queries for each of the following

    * document.querySelector(".className");
    * document.querySelector("#idName");
    * document.querySelector("tag");
    * document.querySelectorAll("")

    * document.querySelector(".className img:not("")")

    * getElementsByClassName("className")
    * getElementById("idName")


    getElementClassName("seed")

    */


    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seeded = document.getElementsByClassName("seed");
    // console.log("seeded:", seeded);

    // [...seeded].forEach(element => console.log(element.innerText));


    // 2. Get all seedless fruit elements
    const seedless = document.getElementsByClassName("seedless");
    // console.log("seedless:", seedless);

    // [...seedless].forEach(element => console.log(element.innerText));


    // 3. Get first seedless fruit element
    const firstSeedless = seedless[0];
    // console.log("firstSeedless:", firstSeedless);


    /* Section 2 */
    // 4. Get inner span with text "you"
    const you = document.querySelector('#wrapper span');
    // console.log("you:", you);

    // 5. Get all children of element "wrapper"
    const children = document.getElementById('wrapper').children;
    // console.log(children);

    // 6. Get all odd number list items in the list
    const odd = document.getElementsByClassName("odd");
    // console.log(odd);

    // 7. Get all even number list items in the list
    const evenItems = document.querySelectorAll(".odd + li");
    // console.log(evenItems);

    const evenListItems = document.querySelectorAll('ol li:not(.odd)');

    const even = document.querySelectorAll('li:nth-child(even)');

    /* Section 3 */
    // 8. Get all tech companies without a class name
    const techsWithoutClass = document.querySelectorAll("a:not([class])");
    console.log("techsWithoutClass:", techsWithoutClass);

    // 9. Get "Amazon" list element
    const amazon = document.querySelector('.shopping');
    // console.log("amazon:", amazon);


    // 10. Get all unicorn list elements (not the image element)

    const unicornList = document.querySelectorAll('.unicorn')
    // console.log(unicornList);
    unicornList.forEach(node => console.log(node.parentElement));

    const unicornListItems = document.querySelectorAll('ul li img.unicorn');
    // console.log(unicornList);


}

window.onload = select;
