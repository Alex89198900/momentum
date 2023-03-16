let player = document.querySelectorAll("player");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev1");
let btnNext = document.querySelector(".next1");
let audio = document.querySelector(".audio");
let progresContainer = document.querySelector(".progres__container");
let progres = document.querySelector(".progres");
let playImg = document.querySelector(".btn__play1");
let playImg1 = document.querySelector(".btn__play2");

let title = document.querySelector(".title");
let track1 = "";
let track2 = "";
let track3 = "";
let track4 = "";
let track5 = "";
let track6 = "";

let urel =
  "https://drive.google.com/drive/folders/1DY_32e5m63yY--xSlr5msorgbhoEZ7i0?hl=ru";

let playlist = ["track1", "track2", "track3", "track4", "track5", "track6"];

let songIndex = 0;

function loadSong(song) {
  title.innerHTML = song;
  audio.src = `sound/${song}.mp3`;
}

loadSong(playlist[songIndex]);

function playSong() {
  audio.play();
  btnPlay.classList.add("_active");
  playImg.classList.add(".btnplayactive");
  playImg.style = "display: block;";
  playImg1.style = "display: none;";
}

function payseSong() {
  audio.pause();
  btnPlay.classList.remove("_active");
  playImg.classList.remove(".btnplayactive");
  playImg1.style = "display: block;";
  playImg.style = "display: none;";
}

btnPlay.addEventListener("click", () => {
  const isBtn = btnPlay.classList.contains("_active");
  if (isBtn) {
    payseSong();
  } else {
    playSong();
  }
});

function nextSong() {
  songIndex++;
  if (songIndex > playlist.length - 1) {
    songIndex = 0;
  }
  loadSong(playlist[songIndex]);
  playSong();
}
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = playlist.length - 1;
  }
  loadSong(playlist[songIndex]);
  playSong();
}

btnNext.addEventListener("click", nextSong);
btnPrev.addEventListener("click", prevSong);

function updateProgres(e) {
  const { duration, currentTime } = e.srcElement;
  const progresPercent = (currentTime / duration) * 100;
  progres.style.width = `${progresPercent}%`;
}
audio.addEventListener("timeupdate", updateProgres);

function setProgres(e) {
  const width = this.clientWidth;
  const clientx = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clientx / width) * duration;
}

progresContainer.addEventListener("click", setProgres);

const liEl = document.createElement("div");
const taskEl = this.document.querySelector(".list");

playlist.forEach(function (item, i) {
  const trackli = document.createElement("li");
  trackli.classList.add("taskd");
  trackli.innerHTML = item;

  const btnplay1 = document.createElement("button");
  btnplay1.classList.add("edit");
  btnplay1.innerHTML = "P/P";

  trackli.appendChild(btnplay1);
  taskEl.appendChild(trackli);

  btnplay1.addEventListener("click", () => {
    const isBtn = btnPlay.classList.contains("_active");
    if (isBtn) {
      payseSong();
    } else {
      loadSong(item);
      playSong();
    }
  });
});

const range = document.getElementById("range");
range.onchange = function () {
  audio.volume = Number(this.value / 100);
};
