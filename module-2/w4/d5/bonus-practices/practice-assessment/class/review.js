class Review{
  constructor(vehicle, tester, starRating, text){
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  };

  addReview(){
    this.tester.reviews.push(this);
    this.vehicle.reviews.push(this);
  };


  static filterByStars(star, ...reviews){
    return reviews.filter(review => review.starRating === star)
  };

};


module.exports = Review;
