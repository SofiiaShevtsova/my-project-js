var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequire716c;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire716c=s);var i=s("eWCmQ");function o(e){return`<div class="stikers">\n  <p class="notice">${e.trim()}</p>\n  <button class="exit visually-hidden">Назад</button>\n  <button class="made visually-hidden">Зроблено</button></div>`}const l=document.querySelector(".box-notice"),r={elements:[],addNotes(e){this.elements.push(e),this.createNotes(this.elements)},removeNotes(e){for(let t=0;t<this.elements.length;t+=1)this.elements[t]===e&&this.elements.splice(t,1);this.createNotes(this.elements)},cleanNotes(){this.elements=[],localStorage.removeItem("list-notice"),l.innerHTML=""},createNotes(e){const t=e.map((e=>o(e))).join("");l.innerHTML=t,localStorage.setItem("list-notice",JSON.stringify(this.elements))}};var a=s("gPbw9");const c=document.querySelector(".js-create"),d=document.querySelector(".js-clean"),u=document.querySelector(".backdrop"),m=document.querySelector(".form");function v(e){"Escape"===e.code&&(u.classList.add("visually-hidden"),document.removeEventListener("keydown",v))}function f(e){e.target.classList.contains("backdrop")&&(u.classList.add("visually-hidden"),document.removeEventListener("keydown",v))}!function(){if(JSON.parse(localStorage.getItem("list-notice")))r.elements.push(...JSON.parse(localStorage.getItem("list-notice"))),r.createNotes(r.elements)}(),a.bgrImage.getImage(),c.addEventListener("click",(function(e){u.classList.remove("visually-hidden"),document.addEventListener("keydown",v),u.addEventListener("click",f)})),m.addEventListener("submit",(function(e){e.preventDefault();let t=m.querySelector("textarea").value;""!==t.trim()?(r.addNotes(t),m.reset(),u.classList.add("visually-hidden"),document.removeEventListener("keydown",v)):i.Notify.failure("Некоректне значення!!!",{width:"500px",distance:"50px",fontSize:"24px"})})),d.addEventListener("click",(function(e){r.cleanNotes()})),l.addEventListener("click",(function(e){const t=e.target.querySelector(".exit"),n=e.target.querySelector(".made");if(e.target.classList.contains("stikers")){let s=e.target;s.classList.add("open"),t.classList.remove("visually-hidden"),n.classList.remove("visually-hidden"),t.addEventListener("click",(e=>{s.classList.remove("open"),t.classList.add("visually-hidden"),n.classList.add("visually-hidden")})),n.addEventListener("click",(e=>{let t=n.parentNode.querySelector("p").textContent;r.removeNotes(t)}))}}));
//# sourceMappingURL=stikers.5adb188b.js.map
