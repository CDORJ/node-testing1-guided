const Car = require("./car.js");

// Test away!
describe("that adding two numbers equals the sum", () => {
  test("that 2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });
  it("should add 2 numbers", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("car class", () => {
  let prius;
  let make = "toyota";
  let model = "prius";

  beforeEach(() => {
    prius = new Car(make, model);
  });

  test("that car class exists", () => {
    expect(Car).toBeDefined();
  });

  it("makes instances of Cars", () => {
    expect(prius).toBeInstanceOf(Car);
  });

  //   test.todo('cars have a "make" property');

  test('cars have a "make" property', () => {
    //AAA pattern:
    // arrange
    // act
    // assert / assess (the outcome)
    expect(prius.make).toBe(make);
    expect(prius).toHaveProperty("make");
    expect(prius).toHaveProperty("make", make);
  });

  test("cars have a model property", () => {
    expect(prius).toHaveProperty("model", model);
  });

  test("cars have the make and model passed", () => {
    expect(prius).toMatchObject({ make, model });
  });

  test("new cars have odometer set to 0", () => {
    expect(prius.odometer).toBe(0);
  });

  test('cars have a "drive()" method', () => {
    expect(prius.drive).toBeDefined();
    expect(prius.drive).toBeTruthy();
    expect(prius.drive).toBeInstanceOf(Function);
    expect(prius.drive).toBe(Car.prototype.drive);
  });

  test("drive returns the drive distance", () => {
    expect(prius.drive(5)).toBe(5);
    expect(prius.drive(0)).toBe(0);
    expect(prius.drive(10)).toBe(10);
  });

  test("drive() increases the odometer by distance", () => {
    prius.drive(5);
    expect(prius.odometer).toBe(5);
    prius.drive(6);
    expect(prius.odometer).toBe(11);
    prius.drive(9);
    expect(prius.odometer).toBe(20);
  });

  test("drive supports comma-separated legs", () => {
    expect(prius.drive(1, 2, 3)).toBe(6);
    expect(prius.drive(4, 5, 6)).toBe(15);
    expect(prius.odometer).toBe(21);
  });

  test("delayedDrive() delays the appropriate time before returning", () => {
    const start = performance.now();

    return prius.delayedDrive(5, 1, 5, 4, 5, 78).then(() => {
      const end = performance.now();
      let actual = end - start;
      let variance = 1234; // to work through // some formula that involves start and end, and the distance
      expect(variance).toBeLessThan(0.01);
    });
  });
});
