let shotClockTimer1;
let shotClockTimer2;

function startShotClock1() {
    shotClockTimer1 = setInterval(updateShotClock1, 1000);
}

function stopShotClock1() {
    clearInterval(shotClockTimer1);
}

function resetShotClock1() {
    stopShotClock1();
    document.getElementById("shot-clock-1").innerText = "24";
}

function resetToZero1() {
    document.getElementById("shot-clock-1").innerText = "0";
}

function updateShotClock1() {
    const shotClockElement = document.getElementById("shot-clock-1");
    let currentTime = parseInt(shotClockElement.innerText);
    if (currentTime > 0) {
        currentTime--;
        shotClockElement.innerText = currentTime;
    }
}

function startShotClock2() {
    shotClockTimer2 = setInterval(updateShotClock2, 1000);
}

function stopShotClock2() {
    clearInterval(shotClockTimer2);
}

function resetShotClock2() {
    stopShotClock2();
    document.getElementById("shot-clock-2").innerText = "14";
}

function resetToZero2() {
    document.getElementById("shot-clock-2").innerText = "0";
}

function updateShotClock2() {
    const shotClockElement = document.getElementById("shot-clock-2");
    let currentTime = parseInt(shotClockElement.innerText);
    if (currentTime > 0) {
        currentTime--;
        shotClockElement.innerText = currentTime;
    }
}

function resetAndSwitch() {
    resetToZero1();
    resetShotClock2();
    startShotClock2();
}

function resetAndSwitch2() {
  resetToZero2();
  resetShotClock1();
  startShotClock1();
}
