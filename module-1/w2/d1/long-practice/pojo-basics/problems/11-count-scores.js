/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

 input: [
  {name: "Anthony", score: 10},
  {name: "Fred", score : 10},
  {name: "Anthony", score: -8},
  {name: "Winnie", score: 12}
       ];

  output: { Anthony: 2, Fred: 10, Winnie: 12 }

    make a plan
    1. define a function that takes in array of objects
    2. define a new object call it scoresObj
    3. iterate to gain access to all the objects
      a. define a variable for the personObj
      b. define a var for the name
      c. define a var for the score
      d. check if the name is our scoresObj ie: in scoresObj[name] === undefined
        a. if its not; add the names as the key and the score as the value
        b. if it is; add the score to the old value
    4. return scoresObj

***********************************************************************/

function countScores(people) {
  // console.log(people);
  let scoresObj = {};// {anthony: 10}

  for(let i = 0; i < people.length; i++){
    let personObj = people[i];// {name: "Winnie", score: 12}
    // console.log(personObj);
    // let name = personObj.name;
    // let score = personObj.score;
    // Winnie, 12
    let { name, score} = personObj;
    // console.log(name, score);

   // {anthony: 2, Fred: 10, Winnie: 12 }
    if(scoresObj[name] === undefined) {

      scoresObj[name] = score;
    } else {
      scoresObj[name] += score;
    };
  };

  return scoresObj;// {anthony: 2, Fred: 10, Winnie: 12 }
}


let ppl = [{name: "Anthony", score: 10},
  {name: "Fred", score : 10},
  {name: "Anthony", score: -8},
  {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
