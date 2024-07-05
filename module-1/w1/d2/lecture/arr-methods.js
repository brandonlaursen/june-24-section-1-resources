


let names = ['brandon', 'zaviar', 'maica'];

let upperCasedNames = [];
names.forEach(function(name) {
  // console.log(name);
  upperCasedNames.push(name.toUpperCase());
})

// console.log(upperCasedNames);// [ 'BRANDON', 'ZAVIAR', 'MAICA' ]


let animals = ['dog', 'cat', 'mouse']
// .map
// create a new array
const upperCasedAnimals = animals.map(function(animal) {
  // console.log(animal)

  return animal.toUpperCase();
})


// console.log(upperCasedAnimals);// [ 'DOG', 'CAT', 'MOUSE' ]
