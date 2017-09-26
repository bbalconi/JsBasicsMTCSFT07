var surfReport = require('./surfReport.js');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//Using the "date" and "todaysWaves" properties, edit the function "processReport" 
//to create and console.log a string that logs "today is {date}
//and the waves are {todaysWaves}, dude." The date should formatted as a "short date."

describe("surfReport", function(){
  it ('can report current waves', function(){
    var val = surfReport.processReport();
    val.should.be.a('string');
  });
  it ('says dude', function(){
    var val = surfReport.processReport();
    expect(val).to.include(', dude.');
  });
  it ('says tubular', function(){
    var val = surfReport.processReport();
    expect(val).to.include('and the waves are tubular');
  });
  it ('says today is 12/25/2017', function(){
    surfReport.date = new Date("12/25/2017");
    var val = surfReport.processReport();
    expect(val).to.include('12/25/2017');
  });
  it ('says today is 3/17/2018', function(){
    surfReport.date = new Date("3/17/2018");
    var val = surfReport.processReport();
    expect(val).to.include('3/17/2018');
  });
});

