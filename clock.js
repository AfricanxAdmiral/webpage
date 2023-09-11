function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();