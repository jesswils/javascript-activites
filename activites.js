let name = "Jess";
let age = "25";
let favouriteColour = "orange";

console.log("Hi my name is " + name + ". " + "I am " + age + " years old." + " My favourite colour is " + favouriteColour + ".");


function getDaysdiffBetweenDates(startDate, endDate){
    var onedaySecond = 1000 * 3600 * 24;
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.floor(timeDiff / onedaySecond);
    return diffDays;
 }
var startFrom = "03/10/1995 00:00:00";
var startDate = new Date(startFrom);
var endDate = new Date();
var daysdiff = getDaysdiffBetweenDates(startDate, endDate);
console.log(daysdiff);