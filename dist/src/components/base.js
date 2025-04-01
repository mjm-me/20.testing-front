export function render(selector, position, template) {
    const validPositions = ['beforeend', 'beforebegin', 'afterend', 'afterbegin'];
    if (!validPositions.includes(position)) {
        return;
    }
    const target = document.querySelector(selector);
    if (!target) {
        throw new Error('Element with selector $(selector) not found');
    }
    target.insertAdjacentHTML(position, template);
    const getElementOptions = {
        beforeend: target.lastElementChild,
        beforebegin: target.previousElementSibling,
        afterend: target.nextElementSibling,
        afterbegin: target.firstElementChild,
    };
    return getElementOptions[position];
}
