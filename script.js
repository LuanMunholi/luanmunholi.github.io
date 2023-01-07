// Set music volume according to slider value
document.getElementById("volume-slider").addEventListener("input", function() {
    document.getElementById("bg-music").volume = this.value;
  });
  
  // Redirect to corresponding page when button is clicked
  document.getElementById("profile-button").addEventListener("click", function() {
    window.location.href = "profile.html";
  });
  document.getElementById("schedule-button").addEventListener("click", function() {
    window.location.href = "schedule.html";
    });
    document.getElementById("ranking-button").addEventListener("click", function() {
    window.location.href = "ranking.html";
    });
    
    // Resize page elements according to screen resolution
    window.addEventListener("resize", function() {
    // Update video dimensions
    document.getElementById("bg-video").width = window.innerWidth;
    document.getElementById("bg-video").height = window.innerHeight;
    
    // Update volume slider position
    document.getElementById("volume-slider").style.left = (window.innerWidth / 2) + "px";
    
    // Update navigation button position
    document.getElementById("nav-buttons").style.top = (window.innerHeight / 2) + "px";
    });
    
    // Initialize page elements on load
    window.addEventListener("load", function() {
    // Update video dimensions
    document.getElementById("bg-video").width = window.innerWidth;
    document.getElementById("bg-video").height = window.innerHeight;
    
    // Update volume slider position
    document.getElementById("volume-slider").style.left = (window.innerWidth / 2) + "px";
    
    // Update navigation button position
    document.getElementById("nav-buttons").style.top = (window.innerHeight / 2) + "px";
    });

    // Select all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');

    // Add 'mouseover' event listeners to each button
    navButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        // Play SFX when hovering over button
        const sfx = new Audio('sfx.mp3');
        sfx.play();
    });
    });
