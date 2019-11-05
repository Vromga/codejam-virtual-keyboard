import keyboardLayout from "./assets/script/keysSetting.js";
import styleSet from "./assets/script/styleSetting.js";
import createElement from "./assets/script/createElelement.js";
import specialKeyStyle from "./assets/script/specialKeyStyle.js";
import createKey from "./assets/script/createKey.js";

'use strict';


// add keyLayout
let ruLayout = keyboardLayout.ru.flat();
let enLayout = keyboardLayout.en.flat();

createElement('input', 'body', styleSet.input);
createElement('div', 'body', styleSet.body);

const input = document.querySelector(`.${styleSet.input}`);
input.setAttribute('placeholder', 'Click for up keyboard');

const keyboard = document.querySelector(`.${styleSet.body}`);
keyboard.classList.add(styleSet.hidden);

input.addEventListener('focus', () => {
    keyboard.classList.remove(styleSet.hidden);
});

createKey(ruLayout);
specialKeyStyle();