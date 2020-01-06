import {listArray} from "./listArray";
import {controller} from "./controller";

const addTodoForm = (div, list) => {
    let todoForm = document.createElement('div');
    div.appendChild(todoForm);
    const formElements = {
        h2: document.createElement('h4'),
        titleInput: document.createElement('input'),
        descInput: document.createElement('input'),
        dateInput: document.createElement('input'),
        prioInput: document.createElement('input'),
        submit: document.createElement('button'),
        cancel: document.createElement('button'),
    }

    formElements.h2.textContent = 'Add a New Todo';
    formElements.titleInput.value = 'Title';
    formElements.descInput.value = 'Description';
    formElements.dateInput.value = 'Due Date (optional)';
    formElements.prioInput.value = 'Priority: 1, 2 3';
    formElements.submit.textContent = 'Submit';
    formElements.cancel.textContent = 'Cancel';

    const appendForm = () => {
        for (let element in formElements) {
            //contentElements[element].setAttribute('class', `${element}`);
            mainContent.appendChild(contentElements[element]);
        }
    }

    
}

export {addTodoForm};