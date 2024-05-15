
document.getElementById("project").style.display = 'none';
let startTime = performance.now();
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

// Set canvas dimensions based on window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define character sets for rain
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

// Combine character sets for rain
const alphabet = katakana + latin + nums;

// Set font size and calculate number of rain drops
const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).fill(canvas.height);

// Flags for rain control
let rainAllowed = true;
let rainStopTime = startTime + 5000; // Time in milliseconds for rain to stop

// Initialize rain drop positions
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  // Clear the canvas before redrawing
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Set font style for rain characters
  context.fillStyle = '#0F0';
  context.font = fontSize + 'px monospace';

  // Loop through rain drops
  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    // Move rain drop down and reset if it goes off screen
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    } else {
      rainDrops[i]++;
    }

    // Stop rain and clear canvas after timer
    if (performance.now() > rainStopTime) {
      rainDrops.fill(0); // Clear all raindrops
      rainAllowed = false; // Prevent new raindrops
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      canvas.style.display = 'none';
      document.getElementById("project").style.display = 'block';
    }
  }
};

// Call the draw function repeatedly
setInterval(draw, 30);

// new
const projectGroups = document.querySelectorAll('.projectGroup');
let currentProjectGroup = 0;


function nextProject() {
  projectGroups[currentProjectGroup].classList.remove('active');
  currentProjectGroup = (currentProjectGroup + 1) % projectGroups.length;
  projectGroups[currentProjectGroup].classList.add('active');
}

function prevProject() {
    projectGroups[currentProjectGroup].classList.remove('active');
    currentProjectGroup = (currentProjectGroup - 1 + projectGroups.length) % projectGroups.length;
    projectGroups[currentProjectGroup].classList.add('active');
}
