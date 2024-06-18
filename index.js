let shotClockTimer;

function startShotClock() {
    clearInterval(shotClockTimer); // Limpia el temporizador si ya está activo
    shotClockTimer = setInterval(updateShotClock, 1000);
}

function stopShotClock() {
    clearInterval(shotClockTimer);
}

function resetShotClock() {
    clearInterval(shotClockTimer);
    document.getElementById("shot-clock").innerText = "24";
}

function resetToZero() {
    clearInterval(shotClockTimer);
    document.getElementById("shot-clock").innerText = "14"; // Cambia el contador a 14 segundos
    startShotClock(); // Inicia automáticamente el contador después de cambiar a 14 segundos
}

function resetTo24Seconds() {
    clearInterval(shotClockTimer);
    document.getElementById("shot-clock").innerText = "24";
    startShotClock(); // Inicia automáticamente el contador después de reiniciar a 24 segundos
}

function updateShotClock() {
    const shotClockElement = document.getElementById("shot-clock");
    let currentTime = parseInt(shotClockElement.innerText);
    if (currentTime > 0) {
        currentTime--;
        shotClockElement.innerText = currentTime;
    }
}
