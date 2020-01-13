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
        prioInput: document.createElement('select'),
        submit: document.createElement('button'),
        cancel: document.createElement('button'),
    }

    formElements.h4.textContent = 'Add a New Todo:';
    formElements.title.textContent = 'Title:';
    formElements.desc.textContent = 'Description (optional):';
    formElements.dueDate.textContent = 'Due Date (optional):';
    formElements.prio.textContent = 'Priority:';
    formElements.submit.textContent = 'Submit';
    formElements.cancel.textContent = 'Cancel';
    formElements.dateInput.setAttribute('type', 'date')

    
    for (let element in formElements) {
        todoForm.appendChild(formElements[element]);
    }

    const prioChoices = {
        None: document.createElement('option'),
        Low: document.createElement('option'),
        Medium: document.createElement('option'),
        High: document.createElement('option')
    }

    for (let element in prioChoices) {
        formElements.prioInput.appendChild(prioChoices[element]);
        prioChoices[element].textContent = `${element}`;
        prioChoices[element].setAttribute('value', `${element}`);
    }

    formElements.submit.addEventListener('click', function() {
        if (formElements.titleInput.value.length > 50) {
            alert('The title is too long. It must be 50 characters or less');
        } else if (formElements.titleInput.value === '') {
            alert('The title cannot be empty');
        } else {
            controller().addTodo(
                listArray[listID], 
                formElements.titleInput.value,
                formElements.descInput.value,
                formElements.dateInput.value,
                formElements.prioInput.value)
            listContent(listID);
            controller().renderList();
        }
    });

    formElements.cancel.addEventListener('click', function() {
        listContent(listID);
    });
}

export {addTodoForm};