import "../../node_modules/modern-normalize"
import "../styles/style.scss"
import "../styles/list_buy.scss"
import { Notify } from "notiflix";

const formForBuy = document.querySelector(".form");
const inputForBuy = formForBuy.querySelector("input");
const buyList = document.querySelector(".buy-list");
const btnCleanList = document.querySelector(".clean-list");

let itemBuy = "";
const MY_LIST = "my-list";
const ARRAY_ITEM = "list-of-product";

buyList.innerHTML = localStorage.getItem(MY_LIST);

function greatListItem(item) {
  const listItem = `<li class="buy-item"><p>${item}</p><button type="button" class="buy-btn">Купили</button></li>`;
  buyList.insertAdjacentHTML("beforeend", listItem);
}

function onFormSubmit(event) {
  event.preventDefault();

  const itemArray = localStorage.getItem(ARRAY_ITEM)
    ? localStorage.getItem(ARRAY_ITEM).split(",")
    : [];

  if (inputForBuy.value.trim() === "") {
    return;
  }
  if (itemArray.includes(inputForBuy.value)) {
    Notify.info("Цей предмет є в списку покупок", {
      width: "500px",
      distance: "50px",
      fontSize: "24px",
      fontFamily: "Pacifico",
      borderRadius: "10px",
    });
    formForBuy.reset();

    return;
  }
  itemBuy = inputForBuy.value.trim();
  itemArray.push(itemBuy);

  greatListItem(itemBuy);

  formForBuy.reset();
  localStorage.setItem(MY_LIST, `${buyList.innerHTML}`);
  localStorage.setItem(ARRAY_ITEM, `${itemArray.join(",")}`);
}

function onBtnCleanClick(event) {
  buyList.innerHTML = "";
  localStorage.removeItem(ARRAY_ITEM);
  localStorage.removeItem(MY_LIST);
}

function onBtnBuyClick(event) {
  if (event.target.classList.contains("buy-btn")) {
    event.target.previousElementSibling.classList.add("buy");
  }
  localStorage.setItem(MY_LIST, `${buyList.innerHTML}`);
}

formForBuy.addEventListener("submit", onFormSubmit);
btnCleanList.addEventListener("click", onBtnCleanClick);
buyList.addEventListener("click", onBtnBuyClick);