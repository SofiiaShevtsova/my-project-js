import "../../node_modules/modern-normalize";
import "../styles/stikers.scss";

const btnGreate = document.querySelector(".js-greate");
const btnClean = document.querySelector(".js-clean");
const backdrop = document.querySelector(".backdrop");
const formForNotice = document.querySelector(".form");
const boxForNotice = document.querySelector('.box-notice')

const LIST_NOTICE = "list-notice"

boxForNotice.innerHTML = localStorage.getItem(LIST_NOTICE);

function closeByKey(event) {
  console.log(event);
  if (event.code === "Escape") {
    backdrop.classList.add("visually-hidden");
    document.removeEventListener("keydown", closeByKey);
  }
}

function onBtnGreateClick (event) {
    backdrop.classList.remove("visually-hidden");
}

function onBackdropClick(event) {
    if (event.target.classList.contains("backdrop")) {
      backdrop.classList.add("visually-hidden");
      return;
    }
}
  
function onFormForNoticeSubmit(event) {
  event.preventDefault();
  let notice = (formForNotice.querySelector("textarea")).value
  if (notice.trim() === "") {
   return 
  }
  let noticeCode = `<div class="stikers">
  <p class="notice">${notice.trim()}</p>
  <button class="exit visually-hidden">Назад</button>
  <button class="made visually-hidden">Зроблено</button></div>`
  boxForNotice.insertAdjacentHTML("beforeend", noticeCode)

  formForNotice.reset()
  localStorage.setItem(LIST_NOTICE, `${boxForNotice.innerHTML}`);
          backdrop.classList.add("visually-hidden");
}

function onBtnCleanClick(event) {
  boxForNotice.innerHTML = ""
  localStorage.removeItem(LIST_NOTICE);
}

btnGreate.addEventListener("click", onBtnGreateClick);
  backdrop.addEventListener("click", onBackdropClick );
  document.addEventListener("keydown", closeByKey);

formForNotice.addEventListener("submit", onFormForNoticeSubmit);

btnClean.addEventListener("click", onBtnCleanClick)
boxForNotice.addEventListener("click", (event) => {
      const btnExit = event.target.querySelector(".exit")
const btnMade = event.target.querySelector(".made")

  if (event.target.classList.contains("stikers")) {
    let card = event.target
    card.classList.add("open")

    btnExit.classList.remove("visually-hidden")
    btnMade.classList.remove("visually-hidden")
    btnExit.addEventListener("click", (event) => {
      card.classList.remove("open")
          btnExit.classList.add("visually-hidden")
    btnMade.classList.add("visually-hidden")

    })
    btnMade.addEventListener("click", (event) => {
      card.classList.remove("open")
      card.hidden = true
          btnExit.classList.add("visually-hidden")
      btnMade.classList.add("visually-hidden")
// for (let i = 0; i < boxForNotice.children.length; i += 1) {
//   if (boxForNotice.children[i].hasAttribute(hidden)) {
//     continue
//   }
// }
        localStorage.setItem(LIST_NOTICE, `${boxForNotice.innerHTML}`);
    })
  }   
  
return
})
