class Vehicle{

  constructor(modelName, year, price, reviews = []){
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = reviews;
  };


  validate(){
    if(!this.modelName || !this.year || !this.price){
      return false;
    };

    if(this.year < 1950 || this.year > 2100) {
      return false;
    }
    return true;
  };

  update(newModelName, newYear, newPrice) {
    if(newYear < 1950 || newYear > 2100) {
      throw new Error(`Year must be between 1950 and 2100`)
    }

    if(newPrice <= 0){
      throw new Error(`Price must be greater than 0`)
    };

    this.modelName = newModelName;
    this.year = newYear;
    this.price = newPrice
  };


  getDetails() {
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
  };

  findReviewByTester(name1) {
    return this.reviews.find(review => review.tester.name === name1)
  }

};


module.exports = Vehicle;
