const inputName = document.querySelector("#jsInputName");
const nameForm = document.querySelector(".input-container");
const NAME = "NAME";

const loadName = () => {
  const currentName = localStorage.getItem(NAME);

  if (currentName !== null) {
    inputName.value = currentName;
    inputName.classList.add("getName");
  }
};

const submitName = (event) => {
  event.preventDefault();
  const writeName = inputName.value;
  localStorage.setItem(NAME, writeName);
  inputName.classList.add("getName");
};

function init() {
  loadName();
  nameForm.addEventListener("submit", submitName);
}

init();
