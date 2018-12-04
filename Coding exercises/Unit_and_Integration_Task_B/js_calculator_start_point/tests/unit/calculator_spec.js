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
    
    it('it can add 1 + 4 and return 5', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
    });
    
    it('it can subtract 7 - 4 and return 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
    });
    
    it('it can multiply 3 x 5 and return 15', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
    });
    
    it('it can divide 21 by 7 and return 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
    });
    
    it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(3);
    calculator.numberClick(4);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 345);
    });
    
    it('should chain multiple operations together', function() {
    calculator.runningTotal = 2;
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 8);
    });
    
    it('should clear the running total without affecting the calculation', function() {
    calculator.runningTotal = 5;
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
    });
    
    
    
    });
  


