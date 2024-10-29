// clock Hands
const handSeconds = document.querySelector(".seconds-hand");
const handMinutes = document.querySelector(".minutes-hand");
const handHours = document.querySelector(".hours-hand");

const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;
  handSeconds.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  handMinutes.style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
  handHours.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
};

setInterval(getTime, 100);
