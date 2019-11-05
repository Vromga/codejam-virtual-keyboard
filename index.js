import keyboardLayout from "./assets/script/keysSetting.js";
import styleSet from "./assets/script/styleSetting.js";

'use strict';
// add keyLayout
let ruLayout = keyboardLayout.ru.flat();
let enLayout = keyboardLayout.en.flat();

function createElement(elem, insert, style) {
    let parent = document.querySelector(insert);
    let child = document.createElement(elem);
    child.classList.add(style);
    parent.insertAdjacentElement('afterbegin', child);
}

createElement('input', 'body', styleSet.input);
createElement('div', 'body', styleSet.body);

const input = document.querySelector(`.${styleSet.input}`);
input.setAttribute('placeholder', 'Click for up keyboard');

const keyboard = document.querySelector(`.${styleSet.body}`);
keyboard.classList.add(styleSet.hidden);

function createKey(layout) {
    const body = document.querySelector(`.${styleSet.body}`);
    for (let i = 0; i < layout.length; i++) {
        const key = document.createElement('button');
        key.classList.add(styleSet.key);
        key.textContent = layout[i];
        body.insertAdjacentElement("beforeend", key);
    }
}

createKey(ruLayout);