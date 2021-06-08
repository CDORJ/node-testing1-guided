// Test away!
const Car = require("./car");

describe("Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car("toyota", "prius");
  });

  describe("constructor", () => {
    it("has a make property", () => {
      expect(car.make).toEqual("toyota");
    });

    it("has a model property", () => {
      expect(car.model).toEqual("prius");
    });

    it("has an odometer property", () => {
      expect(car.odometer).toBe(0);
    });
  });

  describe("has drive() method", () => {
    it("method exists", () => {
      expect(car.drive).toBeDefined();
    });
    it("is a function", () => {
      expect(car.drive).toBeInstanceOf(Function);
    });
    it("changes odometer", () => {
      expect(car.odometer).toBe(0);
      car.drive(4);
      expect(car.odometer).toBe(4);
    });
    it("works multiple times", () => {
      expect(car.odometer).toBe(0);
      car.drive(4);
      expect(car.odometer).toBe(4);
      car.drive(5);
      expect(car.odometer).toBe(9);
      car.drive(6);
      expect(car.odometer).toBe(15);
    });
    it("accepts multiple arguments", () => {
      expect(car.odometer).toBe(0);
      car.drive(4, 5, 6);
      expect(car.odometer).toBe(15);
    });
  });
});
