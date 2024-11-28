// Example: Countdown to the next draw
const nextDrawDate = new Date("2024-01-21T15:00:00Z");
const countdown = document.getElementById('countdown');

setInterval(() => {
    const now = new Date();
    const timeLeft = nextDrawDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdown.textContent = "Draw in progress!";
    }
}, 1000);
