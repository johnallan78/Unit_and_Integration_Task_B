var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
 it('should have working number buttons', function(){
    runnning_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#number9')).click();
    expect(runnning_total.getAttribute('value')).to.eventually.equal('19');
 })

 it('should update the display with the result of the operation', function(){
    runnning_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('+')).click();
    element(by.css('#number1')).click();
    expect(runnning_total.getAttribute('value')).to.eventually.equal('6');
 })

 it('should chain multiple operations together', function(){
   element(by.css('#number5')).click();
   element(by.css('#number4')).click();
   element(by.css('#operator_add')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('54');
   element(by.css('#number3')).click();
   element(by.css('#operator_subtract')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('51');
  
  })

 it('should work for negative numbers', function(){
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number7')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-2');
 })

 it('should work for decimal numbers', function(){
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number7')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0.71428571428');
 })

 it('should work for large numbers', function(){
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number9')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('531441');
 })





});