const workForm = document.querySelector(".work-container");
const input = workForm.querySelector("#jsInputWork");
const ulSchedule = document.querySelector(".ul-schedule");
const ulFinished = document.querySelectorAll(".ul-finished");

const SCHEDULE = "SCHEDULE";
const FINISHED = "FINISHED";

let scheduleValue = [];
let finishedValue = [];

const createSchedule = (spanText, btnText, location) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const clearBtn = document.createElement("button");

  span.innerText = spanText;
  delBtn.innerText = "❌";
  clearBtn.innerText = btnText;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(clearBtn);
  location.appendChild(li);
};

const loadSchedule = () => {
  const currentSchedule = localStorage.getItem(SCHEDULE);

  if (currentSchedule !== null) {
    const parseCurrentSchedule = JSON.parse(currentSchedule);
    const clearBtn = "⏩";

    Array.from(parseCurrentSchedule).forEach((scheduleValue) => {
      createSchedule(scheduleValue.text, clearBtn, ulSchedule);
    });

    scheduleValue.push(parseCurrentSchedule);
  }
};

const saveSchedule = () => {
  localStorage.setItem(SCHEDULE, JSON.stringify(scheduleValue));
};

const submitWork = (event) => {
  event.preventDefault();
  const submitSchedule = input.value;
  const clearBtn = "⏩";
  const scheduleObj = {
    text: submitSchedule,
    id: scheduleValue.length + 1,
  };

  scheduleValue.push(scheduleObj);
  saveSchedule();
  createSchedule(submitSchedule, clearBtn, ulSchedule);
};

function init() {
  loadSchedule();
  workForm.addEventListener("submit", submitWork);
}

init();
