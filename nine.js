//Exercise 9:

var plant = {
  kingdom:"plantae",
  genus:"Epipremnum",
  commonName:"dumb house plant",
  fetchName: function(){
    return "the " + plant.commonName + ", of kingdom " + plant.kingdom + " and genus " + plant.genus + ", is next to the closet behind us.";
  }
}


//fill in the fetchName function to grab the properties kingdom and genus, and returns the string:
//"the {commonName}, of kingdom {kingdom} and genus {genus}, is next to the closet behind us." Use TDD to test
//and console log the string.
plant.fetchName();


module.exports = plant;