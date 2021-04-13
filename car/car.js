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

  delayedDrive(speed, ...legs) {
    const distance = legs.reduce((acc, leg) => acc + leg);
    const waitValue = 0; // ???

    const returnValue = new Promise((resolve) => {
      setTimeout(() => {
        // set the odometer
        this.odometer += distance;
        resolve(distance);
      }, waitValue);
    });
  }
  // create an async function that returns a promise and uses setTimeOut();
}

module.exports = Car;
