export default function updateElement(id, text) {
    let element = document.getElementById(id);

    element.innerHTML = text;

    return;
}