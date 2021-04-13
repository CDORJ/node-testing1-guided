// Build a Car class!

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.odometer = 0;
  }

  drive(...legs) {
    const distance = legs.reduce((acc, leg) => acc + leg);
    this.odometer += distance;
    return distance;
  }

  // create an async function that returns a promise and uses setTimeOut();
}

module.exports = Car;
