const API_KEY = "9bbfaa1e592ee0e289f83512ad6b59c3";
const SECTION = "SECTION";

const geoSuccess = (position) => {
  const sectionLatitude = position.coords.latitude;
  const sectionLongitude = position.coords.longitude;
  const sectionObject = {
    latitude, // latitude: latitude
    longitude, // longitude: longitude
  };
  localStorage.setItem(SECTION, JSON.stringify(sectionObject));
};

const getError = () => {
  // 위치 정보 못 받아왔을 때 span 태그에 안내 문구 나올 수 있도록 추가 예정
};

const askSection = () => {
  navigator.geolocation.getCurrentPosition(geoSuccess, getError);
};

const loadSection = () => {
  const currentSection = localStorage.getItem(SECTION);

  if (currentSection === null) {
    askSection();
  } else {
    const parseSeciont = JSON.parse(currentSection);
    //
  }
};

function init() {
  loadSection();
}

init();
