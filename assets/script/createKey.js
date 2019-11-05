import styleSet from "./styleSetting.js";

function createKey(layout) {
    const body = document.querySelector(`.${styleSet.body}`);
    for (let i = 0; i < layout.length; i++) {
        const key = document.createElement('button');
        key.classList.add(styleSet.key);
        key.textContent = layout[i];
        body.insertAdjacentElement("beforeend", key);
    }
}

export default createKey;