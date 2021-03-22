"use strict";

window.onload = function () {
    var createDiv = document.createElement("div");
    var getDiv = document.getElementById("photos");
    createDiv.setAttribute("class", "container");
    createDiv.setAttribute("id", "dg");
    var button=document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","CALENDAR");
    button.setAttribute("id","buttonCalendar");
    getDiv.appendChild(button);
    getDiv.appendChild(createDiv);
    
    button.addEventListener("mouseenter",function(){
        document.getElementById("dg").innerHTML=createCalendar(thisDay);
        getDiv.removeChild(button);
    });
}

var thisDay = new Date();



function createCalendar(today) {

    var calendarHTML = "<table id='calendar_table'>";

    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(today);

    calendarHTML += "</table>";
    return calendarHTML;
}

function calWeekdayRow() {
    var dayName = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
    var rowHTML = "<tr>";
    for (var i = 0; i < dayName.length; i++) {
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";

    }
    rowHTML += "</tr>";

    return rowHTML;
}
function daysInMonth(calDate) {
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();

    return dayCount[thisMonth];
}

function calDays(today) {
    var day = new Date(today.getFullYear(), today.getMonth(), 1);
    var weekDay = day.getDate();
    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
        htmlCode += "<td></td>"
    }
    var totalDays = daysInMonth(today);
    for (var i = 1; i <= totalDays; i++) {
        day.setDate(i);
        //weekDay = day.getDay();
        weekDay = day.getDay();
        if (i === today.getDate()) {
            htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
        }
        else {
            htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
        }
        if (weekDay === 6) {
            htmlCode += "</tr>";
        }
    }
    return htmlCode;
}


var dayEvent = new Array();

dayEvent[1] = "<br /><a href='#'>Shark in his habit documentary</a><br /> 1 PM <br />$5";
dayEvent[2] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />10 AM <br />$1000";
dayEvent[3] = "<br /><a href='#'>Swimming with a shark</a><br />2 pm<br />$2000";
dayEvent[4] = "<br /><a href='#'>Swimming with a shark</a><br />7:30 pm<br />$2000";
dayEvent[5] = "<br /><a href='#'>Shark Movie</a><br /> 8 am<br />$10";
dayEvent[6] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />7 pm<br />$1000";
dayEvent[7] = "<br/>CLOSED";


dayEvent[8] = "<br /><a href='#'>Shark in his habit documentary</a><br /> 1 PM <br />$5";
dayEvent[9] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />10 AM <br />$1000";
dayEvent[10] = "<br /><a href='#'>Swimming with a shark</a><br />2 pm<br />$2000";
dayEvent[11] = "<br /><a href='#'>Swimming with a shark</a><br />7:30 pm<br />$2000";
dayEvent[12] = "<br /><a href='#'>Shark Movie</a><br /> 8 am<br />$10";
dayEvent[13] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />7 pm<br />$1000";
dayEvent[14] = "<br/>CLOSED";

dayEvent[15] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />7:30 pm<br />$1000";
dayEvent[16] = "<br /><a href='#'>Shark Movie</a><br />1 pm/9 am<br />$10";
dayEvent[17] = "<br /><a href='#'>Swimming with a shark</a><br />7:30 pm<br />$1000";
dayEvent[18] = "<br /><a href='#'>Shark Movie</a><br />2 pm<br />$10";
dayEvent[19] = "<br /><a href='#'>Shark in his habit documentary</a><br />11 am<br />$5";
dayEvent[20] = "<br /><a href='#'>Shark in his habit documentary</a><br />7 pm <br />$5";
dayEvent[21] = "<br/>CLOSED";

dayEvent[22] = "<br /><a href='#'>Shark in his habit documentary</a><br /> 1 PM <br />$5";
dayEvent[23] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />10 AM <br />$1000";
dayEvent[24] = "<br /><a href='#'>Swimming with a shark</a><br />2 pm<br />$2000";
dayEvent[25] = "<br /><a href='#'>Swimming with a shark</a><br />7:30 pm<br />$2000";
dayEvent[26] = "<br /><a href='#'>Shark Movie</a><br /> 8 am<br />$10";
dayEvent[27] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />7 pm<br />$1000";
dayEvent[28] = "<br/>CLOSED";

dayEvent[29] = "<br /><a href='#'>Excursion inside water with a cage to observ sharks</a><br />6 pm<br />$1000";
dayEvent[30] = "<br/>CLOSED";
dayEvent[31] = "<br /><a href='#'>Shark Movie</a><br />7:30 pm<br />FREE/LIMITED CAPACITY";

document.styleSheets[document.styleSheets.length - 1].insertRule(
    "#calendar_table{\
        color: blue;\
        width: 100%;\
        font-size: 0.9em;\
       } ", 0);

document.styleSheets[document.styleSheets.length - 1].insertRule(
    "th.calendar_weekdays{\
            background-color: ivory;\
            width: 14.3%;\
            font-size: 1.1em;\
            border-bottom: 3px solid black;\
           } ", 1);

document.styleSheets[document.styleSheets.length - 1].insertRule(
    "td.calendar_dates{\
                    text-align:left;\
                    vertical-align:left;\
                    font-size:0.8em;\
                    padding:3px;\
                    border: 0.5px solid black;\
                    background-color:white;\
                    height:60px;\
                   } ", 2);

document.styleSheets[document.styleSheets.length - 1].insertRule(
    "#calendar_today{\
        font-weight: bold; \
        color: black;\
        background-color:#dae0e5;\
        border: 1px solid black;\
    }", 3);


