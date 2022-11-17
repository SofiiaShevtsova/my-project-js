export function makeTemplateNotes(elem) {
  const template = `<div class="stikers">
  <p class="notice">${elem.trim()}</p>
  <button class="exit visually-hidden">Назад</button>
  <button class="made visually-hidden">Зроблено</button></div>`;

  return template;
}

export function makeTemplatePhrase(obj) {
  const template = `<p class="phrase--item">"${obj.phrase}"</p><p class="phrase--autor">#${obj.autor}</p>`

  return template
}
