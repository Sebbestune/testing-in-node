import {Calculator} from "./func";

test('Adding 2+3 should result in 5', () => {
  const calc = new Calculator([]);
  calc.input(3);
  calc.input(2);
  calc.add();
  expect(calc.latest()).toBe(5);
});

test('Subtracting 5-3 should result in 2', () => {
  const calc = new Calculator([]);
  calc.input(3);
  calc.input(5);
  calc.subtract();
  expect(calc.latest()).toBe(2);
});

test('Multiplying 3*2 should result in 6', () => {
  const calc = new Calculator([]);
  calc.input(2);
  calc.input(3);
  calc.multiply();
  expect(calc.latest()).toBe(6);
});

test('Dividing 9/3 should result in 3', () => {
  const calc = new Calculator([]);
  calc.input(3);
  calc.input(9);
  calc.divide();
  expect(calc.latest()).toBe(3);
});

test('Printing all values in calculator', () => {
  const calc = new Calculator([]);
  calc.input(2);
  calc.input(3);
  calc.input(4);
  expect(calc.all()).toStrictEqual([2,3,4]);
});

//TODO: Add some tests for more edge cases
//TODO: Add some tests for some other functionality that you invent