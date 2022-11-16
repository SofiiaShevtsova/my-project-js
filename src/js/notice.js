import { makeTemplate } from "./templates";

export const boxForNotice = document.querySelector(".box-notice");
export const LIST_NOTICE = "list-notice";

export const Notice = {
  elements: [],

  addNotice(elem) {
    this.elements.push(elem);
    this.greateNotice(this.elements);
  },

  removeNotice(elem) {
    for (let i = 0; i < this.elements.length; i += 1) {
      if (this.elements[i] === elem) {
        this.elements.splice(i, 1);
      }
    }
    this.greateNotice(this.elements);
  },

  cleanNotice() {
    this.elements = [];
    localStorage.removeItem(LIST_NOTICE);
    boxForNotice.innerHTML = "";
  },

  greateNotice(elements) {
    const newCodeNotice = elements
      .map((elem) => {
        return makeTemplate(elem);
      })
      .join("");
    boxForNotice.innerHTML = newCodeNotice;
    localStorage.setItem(LIST_NOTICE, `${boxForNotice.innerHTML}`);
  },
};
