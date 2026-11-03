
/* SHARINGAN ACTIVATION BEFORE VIDEO */

const scene = document.querySelector(".scene");
const playButton = document.getElementById("playBtn");

// Flash effect element
const flash = document.createElement("div");
flash.className = "sharingan-flash";
document.body.appendChild(flash);

// Prevent repeated clicks during animation
let activating = false;

playButton.addEventListener("click", async function(e){
  // Prevent the original video handler from opening it immediately
  e.stopImmediatePropagation();

  if(activating) return;
  activating = true;

  const videoScreen = document.getElementById("videoScreen");
  const video = document.getElementById("narutoVideo");
  const status = document.getElementById("status");

  // Start Sharingan activation
  scene.classList.add("sharingan-active");
  playButton.disabled = true;
  playButton.textContent = "⟳ SHARINGAN ACTIVATING...";
  status.textContent = "CHAKRA AWAKENING...";

  // Expanding energy ring
  const energy = document.createElement("div");
  energy.className = "energy-ring";
  document.body.appendChild(energy);

  // Red flash after a short delay
  setTimeout(()=>{
    flash.classList.remove("fire");
    void flash.offsetWidth;
    flash.classList.add("fire");
    status.textContent = "SHARINGAN ACTIVATED!";
  }, 700);

  // Wait for the animation before showing video
  setTimeout(async ()=>{
    energy.remove();
    scene.classList.remove("sharingan-active");

    videoScreen.classList.add("show");
    video.currentTime = 0;

    try{
      await video.play();
    }catch(error){
      status.textContent = "VIDEO READY — PRESS PLAY";
    }

    playButton.disabled = false;
    playButton.innerHTML = "▶ &nbsp; PLAY THE NARUTO";
    activating = false;
  }, 1800);
});
