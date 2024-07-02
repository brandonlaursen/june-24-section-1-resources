// Define a function called plateTheDishes that takes in two arrays as two
// parameters. The first array could contain null or string values. The second
// array contains string values. Mutate the first array so that all the null
// values from left to right get replaced with the string values in the second
// array from left to right. Return the first array.

// For example, plateTheDishes([null, 'burger', null], ['salad']) should return
// ['salad', 'burger', null].

// If there are more string values in the second array than there are null
// values in the first array, do NOT add them to the end of the first
// array.

// Loop through arrayWithNull
// Keep track of current index for arrayWithNull AND arrayWithFood
//? nullIndex & foodIndex, both starts at 0
// if (we find null)
//   use the food at foodIndex: //? currentFood
//   replace the value at nullIndex with currentFood
//   foodIndex++
// else
//   nullIndex++

// if (arrayWithFood ends)
//   return

// if (arrayWithNull ends) //! Handled by the loop!
//   return

function plateTheDishes(arrayWithNull, arrayWithFood) {
    let foodIndex = 0;

    for (let i = 0; i < arrayWithNull.length; i++) {
        if (arrayWithNull[i] === null) {
            let currentFood = arrayWithFood[foodIndex]; // Get food

            arrayWithNull[i] = currentFood; // replace null with food

            foodIndex++; // go to next food
        }

        // if next food doesn't exist
        if (arrayWithFood[foodIndex] === undefined) {
            // stop!
            return arrayWithNull;
        }
    }

    return arrayWithNull;
}

console.log(plateTheDishes([null, "burger", null], ["salad"])); // ['salad', 'burger', null]
console.log(plateTheDishes(["salmon", null], ["soup", "rice"])); // ['salmon', 'soup']
console.log(plateTheDishes(["pancake", "eggs"], ["bagel"])); // ['pancake', 'eggs']
console.log(plateTheDishes([null, null, null], ["soup"])); // ['soup', null, null]

// let myArr = [1, 2, 3];

// console.log(myArr);

// myArr[0] = "Heyoooo";

// console.log(myArr);
