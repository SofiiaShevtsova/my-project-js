// import "../../node_modules/modern-normalize"
import "../styles/style.scss";
import "../styles/phrase.scss";
import { listPhrase } from "../js/list-of-phrase";
import { makeTemplatePhrase } from "../js/templates";
const axios = require("axios").default;
const body = document.querySelector("body");

const boxForPhrase = document.querySelector(".phrase--box");

function showPhrase() {
  const phraseObj = listPhrase[getRandomId(listPhrase.length)];
  boxForPhrase.innerHTML = makeTemplatePhrase(phraseObj);
}

function getRandomId(length) {
  const idPhrase = Math.floor(Math.random() * length);
  return idPhrase;
}

showPhrase();

setInterval(showPhrase, 60000);

const options =
  "key=31187211-d453cf6c0705ee9af6400cbd4&min_width=1200&q=colection&image_type=photo&orientation=horizontal&safesearch=true&per_page=3&";
const baseUrl = "https://pixabay.com/api/";

getImage();
async function getImage() {
  const page = Math.floor(Math.random() * 20);

  try {
    const response = await axios.get(`${baseUrl}?${options}` + `page=${page}`);
    console.log(response.data.hits[1].largeImageURL);
    body.style.backgroundImage = `url(${response.data.hits[1].largeImageURL})`;
    body.style.backgroundPosition = `center`;
    body.style.backgroundSize = `cover`;
  } catch (error) {}
}
