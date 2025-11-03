let home = 0
let guest = 0


//HOME SCORE FUNCTIONS
function homeAdd1() {
    home += 1;
    document.getElementById("home-score").textContent = home;
}

function homeAdd2() {
    home += 2
    document.getElementById("home-score").textContent = home
}

function homeAdd3() {
    home += 3;
    document.getElementById("home-score").textContent = home;
}


//GUEST SCORE FUNCTIONS
function guestAdd1() {
    guest += 1;
    document.getElementById("guest-score").textContent = guest;
}

function guestAdd2() {
    guest += 2
    document.getElementById("guest-score").textContent = guest;
}

function guestAdd3() {
    guest += 3;
    document.getElementById("guest-score").textContent = guest;
}