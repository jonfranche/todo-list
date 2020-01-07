import {listArray} from "./listArray";
import {controller} from "./controller";
import {listContent} from "./listContent";

const addTodoForm = (div, list) => {
    let listID = listArray.indexOf(listArray[list]);
    let todoForm = document.createElement('div');
    todoForm.setAttribute('class', 'todoForm');
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
    formElements.prioInput.value = 'Priority: 1, 2, 3';
    formElements.submit.textContent = 'Submit';
    formElements.cancel.textContent = 'Cancel';

    
    for (let element in formElements) {
        todoForm.appendChild(formElements[element]);
    }

    formElements.submit.addEventListener('click', function() {
        controller().addTodo(
            listArray[listID], 
            formElements.titleInput.value,
            formElements.descInput.value,
            formElements.dateInput.value,
            formElements.prioInput.value)
        listContent(listID);
        controller().renderList();
    });

    formElements.cancel.addEventListener('click', function() {
        listContent(listID);
    });
}

export {addTodoForm};