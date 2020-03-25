
const days = ['Sunday','Monday','Tusday','Wednesday','Thursday','Friday','Saturday'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

const today = new Date();

var dayOfWeek = today.getDay();
var dayNum = today.getDate();
var monthNum = today.getMonth();

var fullDate = days[dayOfWeek] + ", " + months[monthNum] + " " + dayNum;

document.getElementById('today').innerHTML = fullDate;

function clock () {

  const date = new Date();

  var hour = date.getHours();
  var min = date.getMinutes();
  var seconds = date.getSeconds();

  if (hour > 12) {
    hour -= 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (min < 10) {
  min = "0" + min;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minute').innerHTML = min;
  document.getElementById('seconds').innerHTML = seconds;

}

setInterval(clock, 1000);

console.log(fullDate);
