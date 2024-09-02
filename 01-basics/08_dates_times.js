                    //**************************DATES************************************ */
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// date is an object

let myDate = new Date()
console.log(myDate);                // 2024-09-02T07:16:22.644Z

console.log(typeof myDate);         // OBJECT       

// important properties of dates

console.log(myDate.toString());     // Mon Sep 02 2024 12:46:22 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Mon Sep 02 2024
console.log(myDate.toISOString());  // 2024-09-02T07:20:55.148Z
console.log(myDate.toJSON());       // 2024-09-02T07:21:37.568Z
console.log(myDate.toLocaleDateString());   // 9/2/2024
console.log(myDate.toLocaleString());       // 9/2/2024, 12:55:31 PM
console.log(myDate.toLocaleTimeString());   // 1:01:25 PM
console.log(myDate.toTimeString());         // 13:03:11 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());          // Mon, 02 Sep 2024 07:34:44 GMT
console.log(myDate.getTimezoneOffset());    // Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer.  ==> -330

// to display specific date

let myCreatedDate = new Date(2001, 2, 3)        // sat mar 03 2001;  in java script months starts from 0
console.log(myCreatedDate.toDateString());      // eg => jan is 0, feb is 1, march is 2......


let myBirthdayDateandTime = new Date(2001, 2, 3, 7,30)
console.log(myBirthdayDateandTime.toLocaleString())     // 3/3/2001, 7:30:00 AM

let todayDateTime = new Date(2014, 8, 2, 14,10)
console.log(todayDateTime.toLocaleString())             // 9/2/2014, 2:10:00 PM


let mycreDate = new Date("02-09-2024")
console.log(mycreDate.toLocaleString());                // 2/9/2024, 12:00:00 AM

console.log(mycreDate.getTime());              // 1707417000000  miliseconds mai hai



let myTimeStamp = Date.now()
console.log(myTimeStamp);               // 1725267348400 miliseconds mai hai


console.log(Date.now());    // 1725267348400

console.log(Math.floor(Date.now()/1000));       // 1725267502 seconds mai nikal ne ka tarika

let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getMonth());   // 8     jan=0, feb=1, mar=2....dec=11
console.log(newDate1.getDay());     // 1     monday=1, tuesday=2..... sunday=7
console.log(newDate1.getSeconds()); // 1,2,3,4,5,.......60

newDate1.toLocaleString('default', {
    weekday: "long"
})


