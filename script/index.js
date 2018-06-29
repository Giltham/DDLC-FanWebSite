
function lanceMusique() {
  document.getElementById("monikey").style.filter="brightness(70%)";
  document.getElementById("Monika").style.filter="brightness(70%)";
  document.getElementById("sayori").style.filter="brightness(110%)";
  document.getElementById('sayo').play();
}

function arreteMusique() {  document.getElementById("corps").style.opacity= "1";
  document.getElementById("monikey").style.filter="brightness(100%)";
  document.getElementById("Monika").style.filter="brightness(100%)";
  document.getElementById("sayori").style.filter="brightness(100%)";
  document.getElementById('sayo').pause();
}

function gresillement() {
  document.getElementById('corps').style.backgroundImage = "url('GIF/grésillement.gif')";
}

function stopGrésillement() {
  document.getElementById('corps').style.backgroundImage = "url('Img/Menu_bg.png')"
}

function img() {
  document.getElementById("exit").style.display = "inline";
  vid.volume = 1;
  document.getElementById("imgimg").style.display = "inline";
}

function reset() {
  document.getElementById("monikey").style.filter="brightness(100%)";
  document.getElementById("Monika").style.filter="brightness(100%)";
  document.getElementById("sayori").style.filter="brightness(60%)";
  document.getElementById("monikey").src = "Img/Hanged_sayori.png"
  document.getElementById("monikey").style.left = '42%';
  document.getElementById("exit").style.display = "none";
  vid.volume = 0.11;
  document.getElementById("imgimg").style.display = "none";
}
