// import "../../node_modules/modern-normalize"
import "../styles/style.scss";
import "../styles/phrase.scss";
import { listPhrase } from "../js/list-of-phrase";
import { makeTemplatePhrase } from "../js/templates";
import { bgrImage} from "../js/bgr-image";

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

bgrImage.getImage()
