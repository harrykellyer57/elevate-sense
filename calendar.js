Here's a code example that generates a calendar using JavaScript. The filename for this code is "calendar.js":

```javascript
/*
 * calendar.js - JavaScript Calendar Generator
 * Generates a calendar for a specified month and year.
 */

// Global variables
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Main function to generate calendar
function generateCalendar(month, year) {
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
  
    var calendar = document.createElement("div");
    calendar.className = "calendar";
  
    var header = document.createElement("div");
    header.className = "header";
    header.textContent = monthNames[month] + " " + year;
    
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    
    var tr = document.createElement("tr");
    for (var i = 0; i < 7; i++) {
        var th = document.createElement("th");
        th.textContent = daysOfWeek[i];
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    
    var currentDay = 1;
    for (var i = 0; i < 6; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            if (i === 0 && j < firstDay) {
                td.textContent = "";
            } else if (currentDay > daysInMonth) {
                break;
            } else {
                td.textContent = currentDay;
                currentDay++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    
    table.appendChild(thead);
    table.appendChild(tbody);
  
    calendar.appendChild(header);
    calendar.appendChild(table);
    
    return calendar;
}

// Usage example
var calendarContainer = document.getElementById("calendar-container");
calendarContainer.appendChild(generateCalendar(4, 2023));
```

Note: In this example, the calendar is generated dynamically and appended to an existing HTML element with the id "calendar-container". This code assumes the presence of HTML and CSS to style the calendar.