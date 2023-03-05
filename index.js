let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
const addOneHome = document.getElementById('add-one-home');
const addTwoHome = document.getElementById('add-two-home');
const addThreeHome = document.getElementById('add-three-home');
const addOneGuest = document.getElementById('add-one-guest');
const addTwoGuest = document.getElementById('add-two-guest');
const addThreeGuest = document.getElementById('add-three-guest');

let homeCount = 0;
let guestCount = 0;

addOneHome.addEventListener('click', addOneH);

addTwoHome.addEventListener('click', addTwoH);

addThreeHome.addEventListener('click', addThreeH);

addOneGuest.addEventListener('click', addOneG);

addTwoGuest.addEventListener('click', addTwoG);

addThreeGuest.addEventListener('click',addThreeG);

function addOneH() {
  homeCount++;
  homeScore.innerHTML = homeCount;
}
function addTwoH() {
  homeCount = homeCount + 2;
  homeScore.innerHTML = homeCount;
}

function addThreeH() {
  homeCount = homeCount + 3;
  homeScore.innerHTML = homeCount;
}

function addOneG() {
  guestCount++;
  guestScore.innerHTML = guestCount;
}

function addTwoG() {
  guestCount = guestCount + 2;
  guestScore.innerHTML = guestCount;
}

function addThreeG() {
  guestCount = guestCount + 3;
  guestScore.innerHTML = guestCount;
}

function resetHomeScore() {
  homeScore.innerHTML = 00;
}

function resetGuestScore() {
  guestScore.innerHTML = 00;
}