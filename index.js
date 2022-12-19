let scoreHome = document.getElementById("score-Home")
let scoreGuest = document.getElementById("score-Guest")
countHome = 0
countGuest = 0

function homeOne() {
    countHome += 1
    scoreHome.textContent = countHome
}
function homeTwo() {
    countHome += 2
    scoreHome.textContent = countHome
}
function homeThree() {
    countHome += 3
    scoreHome.textContent = countHome
}

function guestOne() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}
function guestTwo() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}
function guestThree() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}

function newGame() {
countHome = 0
countGuest = 0
scoreGuest.textContent = countGuest
scoreHome.textContent = countHome
}