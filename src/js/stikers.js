import "../../node_modules/modern-normalize";
import "../styles/style.scss";
import "../styles/stikers.scss";
import { Notify } from "notiflix";
import { Notice, boxForNotice, LIST_NOTICE } from "./notice";

const btnGreate = document.querySelector(".js-greate");
const btnClean = document.querySelector(".js-clean");
const backdrop = document.querySelector(".backdrop");
const formForNotice = document.querySelector(".form");

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(LIST_NOTICE))) {
    Notice.elements.push(...JSON.parse(localStorage.getItem(LIST_NOTICE))) 
    Notice.greateNotice(Notice.elements)
    return
  }
}
checkLocalStorage()


function onBtnGreateClick(event) {
  backdrop.classList.remove("visually-hidden");
  document.addEventListener("keydown", closeByKeyBackdrop);
  backdrop.addEventListener("click", onBackdropClick);
}

function closeByKeyBackdrop(event) {
  if (event.code === "Escape") {
    backdrop.classList.add("visually-hidden");
    document.removeEventListener("keydown", closeByKeyBackdrop);
  }
}

function onBackdropClick(event) {
  if (event.target.classList.contains("backdrop")) {
    backdrop.classList.add("visually-hidden");
    document.removeEventListener("keydown", closeByKeyBackdrop);
  }
}

function onFormForNoticeSubmit(event) {
  event.preventDefault();
  let notice = formForNotice.querySelector("textarea").value;
  if (notice.trim() === "") {
    Notify.failure("Некоректне значення!!!", {
      width: "500px",
      distance: "50px",
      fontSize: "24px",
    });
    return;
  }

  Notice.addNotice(notice);

  formForNotice.reset();
  backdrop.classList.add("visually-hidden");
  document.removeEventListener("keydown", closeByKeyBackdrop);
}

function onBtnCleanClick(event) {
  Notice.cleanNotice();
}

function onBoxForNoticeClick(event) {
  const btnExit = event.target.querySelector(".exit");
  const btnMade = event.target.querySelector(".made");

  if (event.target.classList.contains("stikers")) {
    let card = event.target;
    card.classList.add("open");

    btnExit.classList.remove("visually-hidden");
    btnMade.classList.remove("visually-hidden");

    btnExit.addEventListener("click", (event) => {
      card.classList.remove("open");
      btnExit.classList.add("visually-hidden");
      btnMade.classList.add("visually-hidden");
    });

    btnMade.addEventListener("click", (event) => {
      let noticeForRemove = btnMade.parentNode.querySelector("p").textContent;
      Notice.removeNotice(noticeForRemove);
    });
  }
}

btnGreate.addEventListener("click", onBtnGreateClick);

formForNotice.addEventListener("submit", onFormForNoticeSubmit);

btnClean.addEventListener("click", onBtnCleanClick);

boxForNotice.addEventListener("click", onBoxForNoticeClick);
