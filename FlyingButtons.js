
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
        // alert(my_JSON_object.toSource()); // if it all went fine we have now a JSON Object instead of a string call length
        


        
          var linka = JSON.stringify(my_JSON_object["link"][0]);

          file_to_read.close(); // always close files after reading
       
          }else{
          alert("Bah!"); // if something went wrong
    }

alert(linka);
var myButton = "";
var i;
for (i = 1; i < 12; i++) {
//  myButton += "The number is " + i + "<br>";

  var myButton = myPage.buttons.add({geometricBounds:[0  + i * 10, 0,          10 + i * 10, 50]});
	  myButton.gotoURLBehaviors.add({behaviorEvent:BehaviorEvents.mouseUp, url:linka.split('"').join('')});

}





//var myGoToNextPageBehavior = myButton.gotoNextPageBehaviors.add({behaviorEvent:BehaviorEvents.mouseUp});
	