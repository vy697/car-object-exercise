'use strict';

var Car = function (mpg) {
  this.gallons = 0;
  this.odometerCount = 0;
  this.totalMiles = 0;
  this.tripsCount = [];
};

Car.prototype.fill = function (gallons) {
  this.gallons += gallons;
  return this.gallons;
};

Car.prototype.drive = function(miles) {
  this.gallons = miles / this.gallons;
  this.odometerCount += miles;
  this.tripsCount.push(miles + ' miles');
};

Car.prototype.odometer = function() {
   return this.odometerCount;

};

Car.prototype.trips = function() {
  return this.tripsCount;
};


var car = new Car(10);

module.exports = Car;
