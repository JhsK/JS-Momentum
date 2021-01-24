const infoBtn = document.querySelector(".info-icon");
const modal = document.querySelector(".modal-container");
const close = document.querySelector(".modal-close");

const clickInfoBtn = () => {
  modal.classList.remove("jsModal");
};

const clickClose = () => {
  modal.classList.add("jsModal");
};

function init() {
  infoBtn.addEventListener("click", clickInfoBtn);
  close.addEventListener("click", clickClose);
}

init();
