const bg = document.querySelector(".bg");

const img1 = "ken-cheung-KonWFWUaAuk-unsplash.jpg";
const img2 = "Colle-Nivolet-SplitShire-20-5273.jpg";
const img3 = "Sunset-On-Lake-SplitShire-18-07463.jpg";
const img4 = "SplitShire-20-08742.jpg";
const img5 = "SplitShire-London-Collection-5384.jpg";
const bgArray = [img1, img2, img3, img4, img5];

const loadBg = () => {
  const rndNum = Math.floor(Math.random() * bgArray.length);
  console.log(rndNum);
  bg.style.backgroundImage = `url(image/${bgArray[rndNum]})`;
};

function init() {
  loadBg();
}

init();
