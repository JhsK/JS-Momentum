const clock = document.querySelector("h1");

const renewClock = () => {
  const clockObject = new Date();
  const clockHours = clockObject.getHours();
  const clockMinutes = clockObject.getMinutes();
  const clockSeconds = clockObject.getSeconds();

  clock.innerText = `${clockHours < 10 ? `0${clockHours}` : clockHours}:${
    clockMinutes < 10 ? `0${clockMinutes}` : clockMinutes
  }:${clockSeconds < 10 ? `0${clockSeconds}` : clockSeconds}`${clockHours > 12 ? `PM` : };
};

function init() {
  renewClock();
  setInterval(renewClock, 1000);
}

init();
