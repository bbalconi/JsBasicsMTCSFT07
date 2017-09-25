var surfObj = {
  date: new Date(),
  todaysWaves:"tubular",
  processReport: function(){
    var dateStr = surfObj.date.toLocaleDateString('en-US');
    return "Today is " + dateStr + ", and the waves are " + surfObj.todaysWaves + ", dude.";
  }
}

//Using the "date" and "todaysWaves" properties, edit the function "processReport" 
//to create and console.log a string that logs "today is {date}
//and the waves are {todaysWaves}, dude." The date should formatted as a "short date."
surfObj.processReport();

//console.log(surfObj.date, surfObj.todaysWaves, surfObj.processReport());

module.exports = surfObj;