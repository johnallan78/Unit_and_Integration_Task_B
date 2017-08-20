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

});