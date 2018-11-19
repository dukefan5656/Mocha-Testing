'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  const expectedFizz = [
    [3, 'fizz'],
    [6, 'fizz'],
    [9, 'fizz'],
    [12, 'fizz']
  ];
  const expectedBuzz = [
    [5, 'buzz'],
    [10, 'buzz'],
    [20, 'buzz'],
    [25, 'buzz'],
  ];
  const expectedFizzBuzz = [
    [15, 'fizz-buzz'],
    [30, 'fizz-buzz'],
    [45, 'fizz-buzz'],
    [60, 'fizz-buzz']
  ];
  const expectedNum = [
    [1, 1],
    [2, 2],
    [7, 7],
    [14, 14]
  ];
  const unexpected = [
    'three',
    true,
    null,
    undefined
  ];

  it('should return fizz for multiples of 3', function(){
    expectedFizz.forEach(function(input){
      expect(fizzBuzzer(input[0])).to.equal(input[1]);
    });
  });
  it('should return buzz for multiples of 5', function(){
    expectedBuzz.forEach(function(input){
      expect(fizzBuzzer(input[0])).to.equal(input[1]);
    });
  });
  it('should return fizz-buzz for multiples of 15', function(){
    expectedFizzBuzz.forEach(function(input){
      expect(fizzBuzzer(input[0])).to.equal(input[1]);
    });
  });
  it('should return number if not a multiple of 3 or 5', function(){
    expectedNum.forEach(function(input){
      expect(fizzBuzzer(input[0])).to.equal(input[1]);
    });
  });
  it('should produce error for non-intergers', function(){
    unexpected.forEach(function(input){
      expect(function(){
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});