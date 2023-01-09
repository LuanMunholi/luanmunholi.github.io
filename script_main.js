const audioIcon = document.getElementById("audio-icon");
const muteIcon = document.getElementById("mute-icon");
const unmuteIcon = document.getElementById("unmute-icon");

audioIcon.addEventListener("click", function () {
    if (muteIcon.style.display === "block") {
        const volume = document.getElementById("volume-slider").value;
        const music = document.getElementById("bg-music");
        const normalizedVolume = volume / 100;
        music.volume = normalizedVolume;
        music.play();
        muteIcon.style.display = "none";
        unmuteIcon.style.display = "block";
    } else {
        const music = document.getElementById("bg-music");
        music.volume = 0;
        muteIcon.style.display = "block";
        unmuteIcon.style.display = "none";
    }
});

// Set music volume according to slider value
document.getElementById("apply-button").addEventListener("click", function () {

    // Get the value of the volume slider
    const volume = document.getElementById("volume-slider").value;

    // Convert the volume value to a number between 0 and 1
    const normalizedVolume = volume / 100;

    // Get all audio and video elements on the page
    const audioElements = document.getElementsByTagName("audio");
    const videoElements = document.getElementsByTagName("video");

    // Set the volume of each element to the normalized value
    for (const audio of audioElements) {
        audio.volume = normalizedVolume;
    }
    for (const video of videoElements) {
        video.volume = normalizedVolume;
    }

});

// Redirect to corresponding page when button is clicked
document.getElementById("profile-button").addEventListener("click", function () {
    window.location.href = "profile.html";
});
document.getElementById("schedule-button").addEventListener("click", function () {
    window.location.href = "schedule.html";
});
document.getElementById("ranking-button").addEventListener("click", function () {
    window.location.href = "ranking.html";
});

// Resize page elements according to screen resolution
window.addEventListener("resize", function () {
    // Update video dimensions
    document.getElementById("bg-video").width = window.innerWidth;
    document.getElementById("bg-video").height = window.innerHeight;

    // Update volume slider position
    document.getElementById("volume-slider").style.left = (window.innerWidth / 2) + "px";

    // Update navigation button position
    document.getElementsByTagName("button").style.top = (window.innerHeight / 2) + "px";
});

// Initialize page elements on load
window.addEventListener("load", function () {
    // Update video dimensions
    document.getElementById("bg-video").width = window.innerWidth;
    document.getElementById("bg-video").height = window.innerHeight;

    // Update volume slider position
    document.getElementById("volume-slider").style.left = (window.innerWidth / 2) + "px";

    // Update navigation button position
    document.getElementsByTagName("nav-buttons").style.top = (window.innerHeight / 2) + "px";
});

// Select all navigation buttons
const navButtons = document.querySelectorAll('.nav-button');

// Define a function to play the SFX audio element
const playSfx = () => {
    // Get the value of the volume slider
    const volume = document.getElementById("volume-slider").value;

    // Convert the volume value to a number between 0 and 1
    const normalizedVolume = volume / 100;

    // Play SFX
    const sfx = new Audio('sfx.mp3');
    sfx.preload = 'auto';
    sfx.volume = normalizedVolume;
    sfx.play();
};

// Add 'mouseover' event listeners to each button
navButtons.forEach((button) => {
    button.addEventListener('mouseover', playSfx);
});

document.getElementById("gd-button").addEventListener("click", function () {
    // Hide main menu
    document.getElementById("main-menu").style.display = "none";
    // Show game
    document.getElementById("game").style.display = "block";
});

document.getElementById("back-button").addEventListener("click", function () {
    // Show game
    document.getElementById("game").style.display = "none";
    // Hide main menu
    document.getElementById("main-menu").style.display = "block";
});