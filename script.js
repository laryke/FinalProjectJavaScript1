"use strict";
//2
window.onload = setupStyle();
setInterval("setupStyle()", 1000);
function setupStyle() {
    //create Date
    var currentDay = new Date();
    //switch to local Date
    var timeNow = currentDay.toLocaleString();
    //3
    var divParag = document.querySelector('div.pageGradient');
    divParag.setAttribute("id", "paragraphPos");
    var newElement = document.createElement("h3");
    divParag.appendChild(newElement);
    newElement.setAttribute("id", "timeHeading");
    document.getElementById("timeHeading").innerHTML = timeNow;
    document.addEventListener("keydown", changePage);

    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "h3{\
            color: lightblue;\
           } ", 0);
}
function changePage(e) {
    var key = e.key;
    switch (key) {
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
