const Review = require("./review");
const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");

class Tester {
  constructor(name, reviews = []) {
    this.name = name;
    this.reviews = reviews;
  }

  submitReview(vehicle, rating, text) {
    if (vehicle.validate()) {
      const newReview = new Review(vehicle, this, rating, text);

      newReview.addReview();

      if (vehicle instanceof Bicycle) {
        this.bikeTester = true;
      }
      if (vehicle instanceof ElectricBicycle) {
        this.eBikeTester = true;
      }
      return newReview;
    } else {
      throw new Error(`Cannot submit review for invalid vehicle.`);
    }
  }
}

module.exports = Tester;
