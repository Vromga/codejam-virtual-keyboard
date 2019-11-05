import styleSet from "./assets/script/styleSetting.js";
import createElement from "./assets/script/createElelement.js";
import specialKeyStyle from "./assets/script/specialKeyStyle.js";
import addHover from "./assets/script/addStyleHover.js";
import removeHover from "./assets/script/removeStyleHover.js";
import removeKey from "./assets/script/removeKey.js";
import changeLang from "./assets/script/changeLang.js";

'use strict';

function keyboardInit() {

    let out = '';


    createElement('input', 'body', styleSet.input);
    createElement('div', 'body', styleSet.body);

    const input = document.querySelector(`.${styleSet.input}`);
    input.setAttribute('placeholder', 'Click for up keyboard');

    const keyboard = document.querySelector(`.${styleSet.body}`);
    keyboard.classList.add(styleSet.hidden);
    const bodyDocument = document.querySelector('body');

    input.addEventListener('focus', () => {
        keyboard.classList.remove(styleSet.hidden);
    });

    changeLang();
    specialKeyStyle();


    bodyDocument.addEventListener('keydown', (event) => {
        addHover();
        if(event.ctrlKey){ //change lang
            removeKey();
            changeLang();
            specialKeyStyle();
            addHover();
            input.focus();
        }

    });

    bodyDocument.addEventListener('keyup', (event) => {
        removeHover()
    });
}

keyboardInit();

// if (event.key.valueOf().length === 1) {
//
// }