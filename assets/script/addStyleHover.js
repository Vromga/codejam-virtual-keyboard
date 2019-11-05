import styleSet from "./styleSetting.js";

function addHover() {
    const collectionKey = document.querySelectorAll(`.${styleSet.key}`);
    [...collectionKey].forEach(key => {
        if (event.key === key.innerText || event.key === key.getAttribute('data')) {
            key.classList.add(styleSet.hover);
        }
    });
}

export default addHover;