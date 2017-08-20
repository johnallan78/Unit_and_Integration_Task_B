var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator(); 
    calculator.previousTotal = 5; 
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add five', function(){
    calculator.add(5);
    assert.equal(calculator.runningTotal, 10);
  })

  it('it should subtract five', function(){
    calculator.subtract(5);
    assert.equal(calculator.runningTotal, 0);
  })

  it('it should multiply by 2', function(){
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 10);
  })

  it('it should divide by 5', function(){
    calculator.divide(5);
    assert.equal(calculator.runningTotal, 1);
  })

  it('it should give a string of numbers on click', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, 123);
  })

  it('should add 5 and 9 then subtract 14 to make 0', function(){
      calculator.numberClick(5);
      calculator.operatorClick('+');
      calculator.numberClick(9);
      calculator.operatorClick('-');
      calculator.numberClick(14);
      calculator.operatorClick('=');
      assert.equal(calculator.runningTotal, 0);
    })

  it('should clr the running total', function(){
      calculator.numberClick(6);
      calculator.clearClick();
      assert.equal(calculator.runningTotal, 0);
    })



});
