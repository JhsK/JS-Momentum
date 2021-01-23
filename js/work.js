const workForm = document.querySelector(".work-container");
const input = workForm.querySelector("#jsInputWork");
const ulSchedule = document.querySelector(".ul-schedule");
const ulFinished = document.querySelector(".ul-finished");

const SCHEDULE = "SCHEDULE";
const FINISHED = "FINISHED";

let scheduleValue = [];
let finishedValue = [];

const clickClearBtn = (event) => {
  let btnText = "";
  const eventTarget = event.target.parentNode;
  const temp = eventTarget.parentNode.classList.value;

  if (temp === "ul-schedule") {
    btnText = "⏪";
    const renewFinishedValue = scheduleValue.filter((finValue) => {
      return finValue.id === Number(eventTarget.id);
    });

    clickDelBtn(event);
    createSchedule(
      renewFinishedValue[0].text,
      btnText,
      ulFinished,
      renewFinishedValue[0].id
    );
    finishedValue.push(renewFinishedValue[0]);
    saveFinished();
  } else if (temp === "ul-finished") {
    btnText = "✅";
    const renewScheduleValue = finishedValue.filter((scValue) => {
      return scValue.id === Number(eventTarget.id);
    });

    clickDelBtn(event);
    createSchedule(
      renewScheduleValue[0].text,
      btnText,
      ulSchedule,
      renewScheduleValue[0].id
    );
    scheduleValue.push(renewScheduleValue[0]);
    saveSchedule();
  }
};

const clickDelBtn = (event) => {
  const eventTarget = event.target.parentNode;
  const eventTargetParent = eventTarget.parentNode;
  const temp = eventTargetParent.classList.value; // string

  if (temp === "ul-schedule") {
    const renewScheduleValue = scheduleValue.filter((scValue) => {
      return scValue.id !== Number(eventTarget.id);
    });

    scheduleValue = renewScheduleValue;
    saveSchedule();
  } else if (temp === "ul-finished") {
    const renewFinishedValue = finishedValue.filter((finValue) => {
      return finValue.id !== Number(eventTarget.id);
    });

    finishedValue = renewFinishedValue;
    saveFinished();
  }

  eventTargetParent.removeChild(eventTarget);
};

const createSchedule = (spanText, btnText, location, id) => {
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
  li.id = id;

  delBtn.addEventListener("click", clickDelBtn);
  clearBtn.addEventListener("click", clickClearBtn);
};

const loadSchedule = () => {
  const currentSchedule = localStorage.getItem(SCHEDULE);

  if (currentSchedule !== null) {
    const parseCurrentSchedule = JSON.parse(currentSchedule);
    const clearBtn = "✅";

    Array.from(parseCurrentSchedule).forEach((scheduleValues) => {
      createSchedule(
        scheduleValues.text,
        clearBtn,
        ulSchedule,
        scheduleValues.id
      );
    });

    scheduleValue = parseCurrentSchedule;
  }
};

const loadFinished = () => {
  const currentFinished = localStorage.getItem(FINISHED);

  if (currentFinished !== null) {
    const parseCurrentFinished = JSON.parse(currentFinished);
    const clearBtn = "⏪";

    Array.from(parseCurrentFinished).forEach((finishedValues) => {
      createSchedule(
        finishedValues.text,
        clearBtn,
        ulFinished,
        finishedValues.id
      );
    });

    finishedValue = parseCurrentFinished;
  }
};

const saveSchedule = () => {
  localStorage.setItem(SCHEDULE, JSON.stringify(scheduleValue));
};

const saveFinished = () => {
  localStorage.setItem(FINISHED, JSON.stringify(finishedValue));
};

const submitWork = (event) => {
  event.preventDefault();
  const submitSchedule = input.value;
  const liId = scheduleValue.length + 1;
  input.value = "";
  const clearBtn = "✅";
  const scheduleObj = {
    text: submitSchedule,
    id: scheduleValue.length + 1,
  };

  scheduleValue.push(scheduleObj);
  saveSchedule();
  createSchedule(submitSchedule, clearBtn, ulSchedule, liId);
};

function init() {
  loadSchedule();
  loadFinished();
  workForm.addEventListener("submit", submitWork);
}

init();
