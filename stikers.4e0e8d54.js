!function(){const e=document.querySelector(".js-greate"),t=document.querySelector(".js-clean"),s=document.querySelector(".backdrop"),n=document.querySelector(".form"),i=document.querySelector(".box-notice"),d="list-notice";i.innerHTML=localStorage.getItem(d),e.addEventListener("click",(function(e){s.classList.remove("visually-hidden")})),s.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&s.classList.add("visually-hidden")})),document.addEventListener("keydown",(function e(t){console.log(t),"Escape"===t.code&&(s.classList.add("visually-hidden"),document.removeEventListener("keydown",e))})),n.addEventListener("submit",(function(e){e.preventDefault();let t=n.querySelector("textarea").value;if(""===t.trim())return;let a=`<div class="stikers">\n  <p class="notice">${t.trim()}</p>\n  <button class="exit visually-hidden">Назад</button>\n  <button class="made visually-hidden">Зроблено</button></div>`;i.insertAdjacentHTML("beforeend",a),n.reset(),localStorage.setItem(d,`${i.innerHTML}`),s.classList.add("visually-hidden")})),t.addEventListener("click",(function(e){i.innerHTML="",localStorage.removeItem(d)})),i.addEventListener("click",(e=>{const t=e.target.querySelector(".exit"),s=e.target.querySelector(".made");if(e.target.classList.contains("stikers")){let n=e.target;n.classList.add("open"),t.classList.remove("visually-hidden"),s.classList.remove("visually-hidden"),t.addEventListener("click",(e=>{n.classList.remove("open"),t.classList.add("visually-hidden"),s.classList.add("visually-hidden")})),s.addEventListener("click",(e=>{n.classList.remove("open"),n.hidden=!0,t.classList.add("visually-hidden"),s.classList.add("visually-hidden"),localStorage.setItem(d,`${i.innerHTML}`)}))}}))}();
//# sourceMappingURL=stikers.4e0e8d54.js.map
