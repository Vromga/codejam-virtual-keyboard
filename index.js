import keyboardLayout from "./assets/script/keysSetting.js";
import styleSet from "./assets/script/styleSetting.js";
import createElement from "./assets/script/createElelement.js";
import specialKeyStyle from "./assets/script/specialKeyStyle.js";
import createKey from "./assets/script/createKey.js";
import addHover from "./assets/script/addStyleHover.js";
import removeHover from "./assets/script/removeStyleHover.js";


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
const bodyDocument = document.querySelector('body');

input.addEventListener('focus', () => {
    keyboard.classList.remove(styleSet.hidden);
    // keyboard.focus();
});

createKey(ruLayout);
specialKeyStyle();


bodyDocument.addEventListener('keydown', (event)=>{
    addHover();
});
keyboard.addEventListener('keydown', (event)=>{

});
bodyDocument.addEventListener('keyup', (event)=>{
    removeHover()
});
