import styleSet from "./styleSetting.js";

function addHover() {
    const collectionKey = document.querySelectorAll(`.${styleSet.key}`);
    [...collectionKey].forEach(key => {
        if (event.key === key.innerText) {
            key.classList.add(styleSet.hover);
        }
    });
}

export default addHover;