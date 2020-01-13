import {controller} from './controller';
import {listArray} from './listArray';

const todoEdit = (div, activeList, activeTodo) => {
    const editDiv = document.createElement('div');
    editDiv.setAttribute('class', 'editDiv');
    div.appendChild(editDiv);

    const editElements = {
        title: document.createElement('span'),
        titleInput: document.createElement('input'),
        desc: document.createElement('span'),
        descInput: document.createElement('textarea'),
        date: document.createElement('span'),
        dateInput: document.createElement('input'),
        prio: document.createElement('span'),
        prioInput: document.createElement('select'),
        buttons: document.createElement('div'),
    }

    editElements.title.textContent = 'Title: ';
    editElements.desc.textContent = 'Description (optional): ';
    editElements.date.textContent = 'Due Date (optional): ';
    editElements.prio.textContent = 'Priority (optional): ';
    editElements.titleInput.setAttribute('type', 'text');
    editElements.dateInput.setAttribute('type', 'date');
    editElements.buttons.style.display = 'flex';
    editElements.buttons.style.flexDirection = 'row';

    for (let element in editElements) {
        editDiv.appendChild(editElements[element]);
    }

    const prioChoices = {
        None: document.createElement('option'),
        Low: document.createElement('option'),
        Medium: document.createElement('option'),
        High: document.createElement('option')
    }

    for (let element in prioChoices) {
        editElements.prioInput.appendChild(prioChoices[element]);
        prioChoices[element].textContent = `${element}`;
        prioChoices[element].setAttribute('value', `${element}`);
    }

    const buttonElements = {
        submit: document.createElement('button'),
        cancel: document.createElement('button')
    }

    for (let element in buttonElements) {
        editElements.buttons.appendChild(buttonElements[element]);
        buttonElements[element].textContent = `${element}`;
    }

    buttonElements.cancel.addEventListener('click', function() {
        div.removeChild(div.lastChild);
        div.querySelector('.edit').style.display = 'initial';
    });
}

export {todoEdit};