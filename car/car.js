// Build a Car class!
// Car class to have drive() and asyncDrive() methods, make, model, and odometer properties.
class Car {
  constructor(make, model, odometer) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }

  drive(...numMiles) {
    this.odometer += numMiles.reduce((acc, curr) => acc + curr, 0);
  }

  async asyncDrive(...numMiles) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.drive(...numMiles));
      }, 100);
    });
  }
}

module.exports = Car;
