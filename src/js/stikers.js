import "../../node_modules/modern-normalize";
import "../styles/stikers.scss";

const btnGreate = document.querySelector(".js-greate");
const btnClean = document.querySelector(".js-clean");
const backdrop = document.querySelector(".backdrop");
const formForNotice = document.querySelector(".form");
const boxForNotice = document.querySelector('.box-notice')

function closeByKey(event) {
  console.log(event);
  if (event.code === "Escape") {
    backdrop.classList.remove("visible");
    document.removeEventListener("keydown", closeByKey);
  }
}

btnGreate.addEventListener("click", (event) => {
    backdrop.classList.add("visible");
    
  backdrop.addEventListener("click", (event) => {
    if (event.target.classList.contains("backdrop")) {
      backdrop.classList.remove("visible");
      return;
    }
  });
  document.addEventListener("keydown", closeByKey);
});

formForNotice.addEventListener("submit", (event) => {
    event.preventDefault();
    boxForNotice.insertAdjacentHTML("beforeend",
        `<div class="stikers"><p class="notice">${(formForNotice.querySelector("textarea")).value}</p></div>`)
    formForNotice.reset()
          backdrop.classList.remove("visible");

    
});

btnClean.addEventListener("click", (event) => {
    boxForNotice.innerHTML = ""
})
