
function createElement(elem, insert, style) {
    let parent = document.querySelector(insert);
    let child = document.createElement(elem);
    child.classList.add(style);
    parent.insertAdjacentElement('afterbegin', child);
}

export default createElement;