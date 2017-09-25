
/*
Exercise 6: //Make text fade in and out using jquery.
 Use the setInterval javascript function and the 'hidden' css property.
  Use whatever html file and html tag you want.
*/


$( document ).ready(function(){
  setInterval(function(){ $("#flash").fadeToggle(1000);
  }, 1000);
  setInterval(function(){ $("#brdr").fadeToggle(800);
  }, 800);
  setInterval(function(){ $("#bkgr").fadeToggle(1000);
}, 1000);
});