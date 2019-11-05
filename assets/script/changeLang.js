import createKey from "./createKey.js";
import keyboardLayout from "./keysSetting.js";

let ruLayout = keyboardLayout.ru.flat();
let enLayout = keyboardLayout.en.flat();
let langLayout = 'en';

function changeLang() {
    if (langLayout === 'en') {
        createKey(enLayout);
        langLayout = 'ru'
    } else {
        createKey(ruLayout);
        langLayout = 'en';
    }
}

export default changeLang;