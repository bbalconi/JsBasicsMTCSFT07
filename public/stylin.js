
/*
Exercise 6: //Make text fade in and out using jquery.
 Use the setInterval javascript function and the 'hidden' css property.
  Use whatever html file and html tag you want.
*/


$( document ).ready(function(){
  setInterval(function(){ $("#flash").fadeToggle(2000);
  }, 2000);
});