

// CONTEXT WITH ARROW FUNCS
// ! Cannot bind a function defined with fat arrow function
const gorilla = {
	name: "Harambe",

	wrappedSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
		return function () {
      // normal function loses context here as they do not use the context of what they are defined in
			console.log(this); // GLOBAL
			console.log("Hello my name is " + this.name);
		}
	},

	wrappedArrowSayName: function () {
		console.log(this); // { name: 'Harambe', ... }
    // arrow function this will refer to the context on the above line
		return () => {
			console.log(this); // { name: 'Harambe', ... }
			console.log("Hello my name is " + this.name);
		};
	}
};


// let wrapped = gorilla.wrappedSayName();
// let arrowWrapped = gorilla.wrappedArrowSayName();

// wrapped(); // Hello my name is undefined
// arrowWrapped() // Hello
