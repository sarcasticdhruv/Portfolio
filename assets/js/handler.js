const secret = document.getElementById("secret");
secret.addEventListener("click",
function() {
  let userResponse = confirm("Are you sure?");
  if (userResponse == true) {
    // requestFullscreen(); 
      startSimulation();
  }
});

// function requestFullscreen() {
//   if (document.documentElement.requestFullscreen) {
//     document.documentElement.requestFullscreen();
//   } else if (document.documentElement.webkitRequestFullscreen) {  // Safari
//     document.documentElement.webkitRequestFullscreen();
//   } else if (document.documentElement.msRequestFullscreen) { // IE11
//     document.documentElement.msRequestFullscreen();
//   }
// }

function startSimulation() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.fontFamily = "monospace";
  document.body.style.marginLeft="0";
  document.body.style.marginTop="0";
  var terminal = document.body;
  terminal.innerHTML = "";
  fetch('data.txt')
   .then(response => response.text())
   .then(data => {
          const lines = data.split('\n');
          typeWriterEffect(terminal, lines, 0);
      });
}

function typeWriterEffect(element, lines, lineNumber) {
  if (lineNumber < lines.length) {
    const line = lines[lineNumber];
    element.innerHTML += line + '<br>';
    lineNumber++;
    setTimeout(function() {
      typeWriterEffect(element, lines, lineNumber);
    }, 60); // wait 1 second before displaying the next line
    window.scrollBy(0, 100);

    // Add this CSS
    element.style.lineHeight = "1"; // Adjust this value as needed
    element.style.padding = "0 1px";
  } else {
    // After all lines have been displayed, wait 2 seconds and then make the screen black
    setTimeout(function() {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "black";
    });
      // After another 2 seconds, open a new HTML file
      setTimeout(function() {
         window.open("/NeoPort/index.html", "_self");
        }, 1000);
    }
}