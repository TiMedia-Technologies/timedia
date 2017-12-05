
function updateSettings() { 
localStorage.bgImg = document.getElementById('backgroundImg').value; 
localStorage.barColor = document.getElementById('barColor').value; 
location.reload(); 
} 

if (localStorage.bgImg !== undefined) { 
document.getElementById('body').background = localStorage.bgImg; 
} 

if (localStorage.barColor !== undefined) { 
document.getElementById('navbar').style = "background-color: #" + localStorage.barColor + ";"; 
} 

function lastTile() { 
window.location.href = localStorage.recentUrl; 
} 

document.getElementById("tismileSettings").style = "display: none"; 
document.getElementById("personalizationSettings").style = "display: none"; 
document.getElementById("tileSettings").style = "display: none"; 

function sstismile() { 
  document.getElementById("tismileSettings").style = "display: block"; 
  document.getElementById("personalizationSettings").style = "display: none"; 
  document.getElementById("tileSettings").style = "display: none"; 
  document.getElementById("sspersonal-icon").className = "glyphicon glyphicon-menu-down";
  document.getElementById("sstiles-icon").className = "glyphicon glyphicon-menu-down";
  document.getElementById("sstismile-icon").className = "glyphicon glyphicon-menu-up";
} 

function sstiles() { 
  document.getElementById("tismileSettings").style = "display: none"; 
  document.getElementById("personalizationSettings").style = "display: none"; 
  document.getElementById("tileSettings").style = "display: block"; 
  document.getElementById("sspersonal-icon").className = "glyphicon glyphicon-menu-down";
  document.getElementById("sstiles-icon").className = "glyphicon glyphicon-menu-up";
  document.getElementById("sstismile-icon").className = "glyphicon glyphicon-menu-down";
} 

function sspersonal() {
  document.getElementById("tismileSettings").style = "display: none"; 
  document.getElementById("personalizationSettings").style = "display: block"; 
  document.getElementById("tileSettings").style = "display: none"; 
  document.getElementById("sspersonal-icon").className = "glyphicon glyphicon-menu-up";
  document.getElementById("sstiles-icon").className = "glyphicon glyphicon-menu-down";
  document.getElementById("sstismile-icon").className = "glyphicon glyphicon-menu-down";
}
