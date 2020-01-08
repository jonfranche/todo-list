import {listArray} from "./listArray";
import {controller} from "./controller";
import {listContent} from "./listContent";

const addTodoForm = (div, list) => {
    let listID = listArray.indexOf(listArray[list]);
    let todoForm = document.createElement('div');
    todoForm.setAttribute('class', 'todoForm');
    div.appendChild(todoForm);
    const formElements = {
        h4: document.createElement('h4'),
        title: document.createElement('span'),
        titleInput: document.createElement('input'),
        desc: document.createElement('span'),
        descInput: document.createElement('textarea'),
        dueDate: document.createElement('span'),
        dateInput: document.createElement('input'),
        prio: document.createElement('span'),
        prioInput: document.createElement('input'),
        submit: document.createElement('button'),
        cancel: document.createElement('button'),
    }

    formElements.h4.textContent = 'Add a New Todo:';
    formElements.title.textContent = 'Title:';
    formElements.desc.textContent = 'Description:';
    formElements.dueDate.textContent = 'Due Date (optional):';
    formElements.prio.textContent = 'Priority: 1, 2, 3';
    formElements.submit.textContent = 'Submit';
    formElements.cancel.textContent = 'Cancel';
    formElements.dateInput.setAttribute('type', 'date')

    
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