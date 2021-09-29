const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("le diste click al botón de play");
}

$pause.addEventListener("click", handlePause);

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("le diste click al botón de pause");
}

$backward.addEventListener("click", handlebackward);
function handlebackward() {
  $video.currentTime = $video.currentTime - 10;
  console.log("para atrás 10 segundos", $video.currentTime);
}

$forward.addEventListener("click", handleforward);
function handleforward() {
  $video.currentTime = $video.currentTime + 10;
  console.log("para adelante 10 segundos", $video.currentTime);
}
const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handletimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("ha cargado mi video", $video.duration);
}

function handletimeUpdate() {
  progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleinput);

function handleinput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
