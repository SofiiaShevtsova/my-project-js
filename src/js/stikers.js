import "../../node_modules/modern-normalize";
import "../styles/style.scss";
import "../styles/stikers.scss";
import { Notify } from "notiflix";
import { Notes, boxForNotes, LIST_NOTES } from "./notice";
import { bgrImage} from "../js/bgr-image";


const btnCreate = document.querySelector(".js-create");
const btnClean = document.querySelector(".js-clean");
const backdrop = document.querySelector(".backdrop");
const formForNotes = document.querySelector(".form");

function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem(LIST_NOTES))) {
    Notes.elements.push(...JSON.parse(localStorage.getItem(LIST_NOTES)));
    Notes.createNotes(Notes.elements);
    return;
  }
}
checkLocalStorage();

bgrImage.getImage()

function onBtnCreateClick(event) {
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
  let notice = formForNotes.querySelector("textarea").value;
  if (notice.trim() === "") {
    Notify.failure("Некоректне значення!!!", {
      width: "500px",
      distance: "50px",
      fontSize: "24px",
    });
    return;
  }

  Notes.addNotes(notice);

  formForNotes.reset();
  backdrop.classList.add("visually-hidden");
  document.removeEventListener("keydown", closeByKeyBackdrop);
}

function onBtnCleanClick(event) {
  Notes.cleanNotes();
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
      let notesForRemove = btnMade.parentNode.querySelector("p").textContent;
      Notes.removeNotes(notesForRemove);
    });
  }
}

btnCreate.addEventListener("click", onBtnCreateClick);

formForNotes.addEventListener("submit", onFormForNoticeSubmit);

btnClean.addEventListener("click", onBtnCleanClick);

boxForNotes.addEventListener("click", onBoxForNoticeClick);
