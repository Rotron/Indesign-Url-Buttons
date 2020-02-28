# include "json2.js"
var myDocument = app.documents.add();
var myPage = myDocument.pages.item(0);




/*Websocket*/
var conn = new Socket;
var my_JSON_object = null;
var host = "www.test.com";

var cmd = "GET /test.json HTTP/1.1\r\nHost:" + host + "\r\n\r\n";

var reply = '';

conn.timeout = 100;

if (conn.open(host + ':80', 'BINARY')) {

    conn.write(cmd);

    while (conn.connected && !conn.eof) {

        reply += conn.read(1024) + "\n";

    }

    conn.close();

    var array = reply.split("\n");
    var array1 = array.slice(8);
    var array2 = array1[1];
    var array3 = array2.toString();



    my_JSON_object = JSON.parse(array3);

    for (var key in my_JSON_object) {
        if (my_JSON_object.hasOwnProperty(key)) {

            var link = my_JSON_object[key].link.split('"').join('');
            var x1 = my_JSON_object[key].x1.split('"').join('');
            var y1 = my_JSON_object[key].y1.split('"').join('');
            var x2 = my_JSON_object[key].x2.split('"').join('');
            var y2 = my_JSON_object[key].y2.split('"').join('');

            var myButton = myPage.buttons.add({
                geometricBounds: [Number(y1), Number(x1) + 10, Number(y2), Number(x2) + 10]
            });
            myButton.gotoURLBehaviors.add({
                behaviorEvent: BehaviorEvents.mouseUp,
                url: link
            });
        }
    }
}
/**End Websocket**/