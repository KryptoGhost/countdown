const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");

let futureDate = new Date(2023, 1, 22, 12, 30, 0)
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();


giveaway.textContent = `Giveaway Ends on ${weekday} ${date} ${month} ${year}, ${hours}:${minutes}am`;

const futureTime = futureDate.getTime(); //get deadline in millisec
function getRemainingTime() {
const today = new Date().getTime();
const t = futureTime - today;

/* get other time in millisec
1s = 1000ms
1min = 60s
ihr = 60mim
1day = 24hr*/
oneDay = 24*60*60*1000;
onehour = 60*60*1000;
onemin = 60 *1000;

//calculate values
let days = t/oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / onehour);
let minutes = Math.floor((t % onehour) / onemin);
let seconds = Math.floor((t % onemin) / 1000);

//set array with values variables
const values = [days, hours, minutes, seconds]

function format(item) {
  if (item < 10) {
    return `0${item}`;
  }
  return item;
}

items.forEach(function(item, index) {
  item.innerHTML = format(values[index]);
});

if (t < 0) {
  clearInterval(countdown);
  deadline.innerHTML = `<h4>this giveaway is expired</h4>`
}

}

let countdown =setInterval(getRemainingTime, 1000);
getRemainingTime();