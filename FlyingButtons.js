
#include "json2.js" // jshint ignore:line

var myDocument = app.documents.add();
var myPage = myDocument.pages.item(0);

/*
var myButton = myPage.buttons.add({geometricBounds:[72, 72, 144, 144]});
myButton.gotoURLBehaviors.add({behaviorEvent:BehaviorEvents.mouseUp, url:"swwww"});
*/
    var script_file = File($.fileName); // get the location of the script file
    var script_file_path = script_file.path; // get the path

    var file_to_read = File(script_file_path + "/test.json");// but we want JSON
    var my_JSON_object = null; // create an empty variable
    //  alert(file_to_read); // This could be interesting
    var content; // this will hold the String content from the file
    if(file_to_read !== false){// if it is really there
          file_to_read.open('r'); // open it
          content = file_to_read.read(); // read it
          my_JSON_object =  JSON.parse(content);// now evaluate the string from the file
       
for (var key in my_JSON_object) {
   if (my_JSON_object.hasOwnProperty(key)) {
         //alert(my_JSON_object[key].link[0]);

    var myButton = myPage.buttons.add({geometricBounds:[0  +  Math.floor(Math.random() * 100) + 1, 0,          10 + Math.floor(Math.random() * 100) + 1, 50]});
    myButton.gotoURLBehaviors.add({behaviorEvent:BehaviorEvents.mouseUp, url:my_JSON_object[key].link1.split('"').join('')});
   }
} 

        

          file_to_read.close(); // always close files after reading
       
          }else{
          alert("Bah!"); // if something went wrong
    }





//var myGoToNextPageBehavior = myButton.gotoNextPageBehaviors.add({behaviorEvent:BehaviorEvents.mouseUp});
	
