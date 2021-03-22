"use strict";

window.addEventListener("load", function() {
    document.addEventListener("keydown",changePage);
});
function changePage(e){
    var key = e.key;
    switch (key) {
        case "1":
            document.location.replace("index.html");
            break;
        case "2":
            document.location.replace("Page2.html");
            break;
        case "3":
            document.location.replace("Page3.html");
            break;
        case "4":
            document.location.replace("Page4.html");
            break;

    }
}