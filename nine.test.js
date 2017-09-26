var nine = require('./nine.js');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//fill in the fetchName function to grab the properties kingdom and genus, and returns the string:
//"the {commonName}, of kingdom {kingdom} and genus {genus}, is next to the closet behind us." Use TDD to test
//and console log the string.

describe.only("nine", function(){
  it ('returns a string', function(){
    var val = nine.fetchName();
    val.should.be.a('string');
  });
  it ('returns the value of kingdom', function(){
    var val = nine.fetchName();
    expect(val).to.include('plantae');
  });
  it ('returns the correct string', function(){
    var val = nine.fetchName();
    assert.equal(val, "the dumb house plant, of kingdom plantae and genus Epipremnum, is next to the closet behind us.");
  });
});