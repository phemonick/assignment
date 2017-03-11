var myApp = require('fbuz.js');
(function() {
  'use strict';

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

   it("should return `FizzBuzz` for 75", function() {
    expect(fizzBuzz(75)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 12", function() {
    expect(fizzBuzz(12)).toBe('Fizz');
  });

  it("should return `Buzz` for 50", function() {
    expect(fizzBuzz(50)).toBe('Buzz');
  });



  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

  });

})();