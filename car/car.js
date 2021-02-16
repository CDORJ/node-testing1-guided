// Build a Car class!
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.odometer = 0;
    }

    drive(...legs) {

        const total = legs.reduce((acc, leg) => acc + leg);
        this.odometer += total;
        return total;
    }

    asyncDrive(...legs) {
        const retVal = new Promise((resolve, reject) => {
            const total = legs.reduce((acc, leg) => acc + leg);
            this.odometer += total;
            resolve(total);
        })

        return retVal;
    }
}

module.exports = Car;