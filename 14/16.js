document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Happy Valentine Week, Smarika! 💖",
        "Wishing you a beautiful Rose Day! 🌹",
        "Will you be mine forever? 💍",
        "A big hug for you! 🤗",
        "Sweet chocolates for my sweetest love 🍫",
        "You are my everything! ❤️",
        "Happy Valentine's Day, my love! 💕"
    ];

    let messageIndex = 0; // Track the current message
    const messageElement = document.querySelector(".message");
    const envelope = document.querySelector(".container");
    const audio = document.getElementById("valentineMusic");

    envelope.addEventListener("mouseenter", function () {
        // Update the message
        messageElement.textContent = messages[messageIndex];

        // Move to the next message, loop back after the last one
        messageIndex = (messageIndex + 1) % messages.length;

        // Play music only if it’s not already playing
        if (audio.paused) {
            audio.play();
        }
    });
});
