// Countdown Timer
function updateCountdown() {
    const drawDate = new Date("January 15, 2024 15:00:00 EST").getTime();
    const now = new Date().getTime();
    const timeLeft = drawDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "The draw is happening now!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
