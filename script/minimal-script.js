const lang = navigator.language;
function setDate() {
   let date = new Date();
   // calendar
   let month = date.getMonth();
   let num = date.getDate();
   let day = date.toLocaleString(lang, { weekday: "long" });
   let monthName = date.toLocaleString(lang, { month: "long" });
   let year = date.getFullYear();
   // clock
   let hour = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();
   let period = "AM";
   if (hour >= 12) {
      period = "PM";
   }
   if (hour > 12) {
      hour = hour - 12;
   }
   if (minute < 10) {
      minute = "0" + minute;
   }
   if (second < 10) {
      second = "0" + second;
   }

   //    document.querySelector("#month").innerHTML = monthName;
   //    document.querySelector("#day").innerHTML = day;
   //    document.querySelector("#num").innerHTML = num;
   //    document.querySelector("#year").innerHTML = year;
   document.querySelector(
      "#date"
   ).innerHTML = `${hour} : ${minute} : ${second} <sup> ${period} </sup>`;
}
setInterval(setDate, 1000);
setDate();
