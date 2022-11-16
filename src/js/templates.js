export function makeTemplate (elem) {const template = `<div class="stikers">
  <p class="notice">${elem.trim()}</p>
  <button class="exit visually-hidden">Назад</button>
  <button class="made visually-hidden">Зроблено</button></div>`

return template}