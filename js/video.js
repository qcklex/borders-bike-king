/* I explored how to create a video 
   carousel using JavaScript instead of 
   editing it in Premiere Pro 
   (it would be faster to edit in Premiere but I found it
   entertaining) which allows multiple videos to play
   in sequence with smooth transitions  
   and a logo animation between loops.

   The code below implements this functionality by 
   defining a playlist of videos, handling the end of
   each video to trigger the next one, and creating 
  a fade effect with a logo display in the final video loop 
  of the video array.

*/


// VIDEO PLAYLIST AND TIMING CONSTANTS
// Array of video file paths that will play in sequence
const videoPlaylist = [
    './assets/videos/forest_cycling_path.mp4',
    './assets/videos/mountain_bike_forest.mp4',
    './assets/videos/cyclist_woods_adventure.mp4'
];

// Timing configuration (in milliseconds)
const FADE_MS = 700;       // Duration of fade transitions (must match CSS transition duration)
const LOGO_HOLD_MS = 1000; // How long the logo stays fully visible before fading out

// DOM ELEMENT REFERENCES
let currentVideoIndex = 0;                              // Track which video is currently playing
const videoPlayer = document.getElementById('videoPlayer');         // The <video> element
const videoOverlay = document.getElementById('videoOverlay');       // Black overlay for fade effects
const videoLogoText = document.querySelector('.video-logo-text');   // Logo image that fades in/out

// LOAD AND PLAY VIDEO FUNCTION
// This function loads a video from the playlist and starts playing it
function loadAndPlay(index) {
    // Set the video player's src attribute to the video file at the given index
    videoPlayer.src = videoPlaylist[index];

    // Start playing the video
    // .catch(() => {}) handles cases where autoplay is blocked by the browser
    videoPlayer.play().catch(() => {});
}

// SHOW LOGO SEQUENCE ANIMATION
// This function creates the animated sequence that plays between video loops:
// Screen fades to black → Logo fades in → Logo fades out → Screen fades back
// After completion, calls the provided callback function (usually to start the next video)
function showLogoSequence(callback) {
    // Step 1: Fade screen to black
    // Add the 'active' class to the overlay to trigger CSS fade-in animation
    videoOverlay.classList.add('active');

    // Wait for the fade to black to complete (FADE_MS), then continue
    setTimeout(() => {
        // Step 2: Logo fades in over the black screen
        // Add 'visible' class to logo to trigger CSS fade-in animation
        videoLogoText.classList.add('visible');

        // Wait for the logo to fully appear, then continue
        setTimeout(() => {
            // Step 3: Logo fades out
            // Remove 'visible' class to trigger CSS fade-out animation
            videoLogoText.classList.remove('visible');

            // Wait for the logo to fade out, then continue
            setTimeout(() => {
                // Step 4: Black overlay fades out (screen returns to normal)
                // Remove 'active' class to trigger CSS fade-out animation
                videoOverlay.classList.remove('active');

                // After the black fades out, wait a moment then call the callback
                // The callback usually loads and plays the next video
                setTimeout(callback, FADE_MS);
            }, FADE_MS);
        }, LOGO_HOLD_MS);
    }, FADE_MS);
}

// VIDEO CAROUSEL MAIN LOOP
// Only set up video carousel if both video player and overlay elements exist
if (videoPlayer && videoOverlay) {
    // Listen for the 'ended' event, which fires when a video finishes playing
    videoPlayer.addEventListener('ended', () => {
        // Calculate the next video index (loops back to 0 after reaching the end)
        // (currentVideoIndex + 1) % videoPlaylist.length ensures we cycle through all videos
        const nextIndex = (currentVideoIndex + 1) % videoPlaylist.length;

        if (nextIndex === 0) {
            // We've finished the last video (index 2) and are about to loop back to the first
            // Show the logo animation sequence (fade to black, show logo, fade back)
            // This provides a visual break between video cycles
            showLogoSequence(() => {
                // After the logo sequence completes, reset to the first video and play it
                currentVideoIndex = 0;
                loadAndPlay(0);
            });
        } else {
            // We're in the middle of the video cycle (not at the end)
            // Skip the logo animation and play the next video immediately
            currentVideoIndex = nextIndex;
            loadAndPlay(currentVideoIndex);
        }
    });

    // Start the carousel by loading and playing the first video when the page loads
    loadAndPlay(0);
}
