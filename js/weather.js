const spanWeather = document.querySelector(".jsWeather");

const API_KEY = "9bbfaa1e592ee0e289f83512ad6b59c3";
const SECTION = "SECTION";

const getWeather = (lat, lng) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      spanWeather.innerText = `온도: ${temperature}℃ - 위치: ${place}`;
    });
};

const geoSuccess = (position) => {
  const sectionLatitude = position.coords.latitude;
  const sectionLongitude = position.coords.longitude;
  const sectionObject = {
    latitude: sectionLatitude,
    longitude: sectionLongitude,
  };
  localStorage.setItem(SECTION, JSON.stringify(sectionObject));
};

const getError = () => {
  spanWeather.innerText = "날씨, 위치 정보 동기화를 실패하였습니다.";
};

const askSection = () => {
  navigator.geolocation.getCurrentPosition(geoSuccess, getError);
};

const loadSection = () => {
  const currentSection = localStorage.getItem(SECTION);

  if (currentSection === null) {
    askSection();
  } else {
    const parseSection = JSON.parse(currentSection);
    getWeather(parseSection.latitude, parseSection.longitude);
  }
};

function init() {
  loadSection();
}

init();
