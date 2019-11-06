import styleSet from './assets/script/styleSetting.js';
import createElement from './assets/script/createElelement.js';
import specialKeyStyle from './assets/script/specialKeyStyle.js';
import addHover from './assets/script/addStyleHover.js';
import removeHover from "./assets/script/removeStyleHover.js";
import removeKey from './assets/script/removeKey.js';
import changeLang from './assets/script/changeLang.js';



function keyboardInit() {
    let out = '';

    createElement('input', 'body', styleSet.input);
    createElement('div', 'body', styleSet.body);

    const input = document.querySelector(`.${styleSet.input}`);
    input.setAttribute('placeholder', 'Welcome to virtual keyboard...');

    const keyboard = document.querySelector(`.${styleSet.body}`);
    const bodyDocument = document.querySelector('body');


    changeLang();
    specialKeyStyle();

    bodyDocument.addEventListener('keydown', (event) => {
        addHover();
        letter(event);
        if (event.ctrlKey) { // change lang
            removeKey();
            changeLang();
            specialKeyStyle();
            addHover();
        }
    });

    bodyDocument.addEventListener('keyup', () => {
        removeHover();
    });

    bodyDocument.addEventListener('click', (event) => {
        console.dir(event);
        if(event.target.textContent.length === 1){
            out += event.target.textContent;
            input.value = '';
            input.value = out;
        }
    });

    function letter(event) {
        if(event.key.length === 1){
            let letter = document.querySelector(`.${styleSet.key}[data='${event.code}']`);
            out += letter.textContent;
            input.value = '';
            input.value = out;
        }
    }
}

keyboardInit();
