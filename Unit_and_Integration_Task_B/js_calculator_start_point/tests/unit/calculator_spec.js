var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add numbers', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    let actual = calculator.runningTotal;
    assert.equal(actual,5)
  })

  it('should subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    let actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  it('should divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    let actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

  it('should multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    let actual = calculator.runningTotal;
    assert.equal(actual, 15)
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.numberClick(5)
    let actual = calculator.runningTotal;
    assert.equal(actual, 345)
  })

  it('should chain multiple operations together', function(){
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    let actual = calculator.runningTotal;
    assert.equal(actual, 8)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 0
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick('=')
    let actual = calculator.runningTotal;
    assert.equal(actual, 8)
  })

});
