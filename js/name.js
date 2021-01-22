const inputName = document.querySelector("#jsInputName");
const form = document.querySelector(".input-container");
const NAME = "NAME";

const loadName = () => {
  const currentName = localStorage.getItem(NAME);

  if (currentName !== null) {
    inputName.value = currentName;
  }
};

const submitName = (event) => {
  event.preventDefault();
  const writeName = inputName.value;
  console.log(writeName);
  localStorage.setItem(NAME, writeName);
};

function init() {
  loadName();
  form.addEventListener("submit", submitName);
}

init();
