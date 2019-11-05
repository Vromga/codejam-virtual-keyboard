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
