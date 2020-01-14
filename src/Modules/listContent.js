import {listArray} from "./listArray";
import {controller} from "./controller";
import {addTodoForm} from "./addTodoForm";

const listContent = (list) => {
    const mainContent = document.querySelector('.mainContent');
    controller().clearDiv(mainContent);
    const listElements = {
        title: document.createElement('h2'),
        buttons: document.createElement('div'),
        description: document.createElement('p'),
        todoList: document.createElement('div'),
        addTodo: document.createElement('button'),
    }

    const buttonsElements = {
        edit: document.createElement('button'),
        delete: document.createElement('button')
    }

    listElements.title.textContent = listArray[list].title;
    buttonsElements.delete.textContent = 'Delete List';
    buttonsElements.edit.textContent = 'Edit List';
    listElements.description.textContent = listArray[list].description;
    listElements.addTodo.textContent = '+ Add a New Todo';

    for (let element in listElements) {
        mainContent.appendChild(listElements[element]);
        listElements[element].setAttribute('class', `${element}`);
    }

    for (let element in buttonsElements) {
        listElements.buttons.appendChild(buttonsElements[element]);
        buttonsElements[element].setAttribute('class', `${element}`);
    }

    controller().renderTodos(list);

    buttonsElements.delete.addEventListener('click', function() {
        if (window.confirm("To confirm deleting this List, Press \"OK\"")){
            controller().deleteProject(listArray.indexOf(listArray[list]));
            controller().clearDiv(mainContent);
            controller().renderList();
        }
    });

    buttonsElements.edit.addEventListener('click', function() {
        editList(list);
        mainContent.querySelector('.edit').style.display = 'none';
    })

    listElements.addTodo.addEventListener('click', function() {
        mainContent.removeChild(mainContent.lastChild);
        addTodoForm(mainContent, list);
    });

}

const editList = (list) => {
    const mainContent = document.querySelector('.mainContent');
    const editForm = document.createElement('div');
    editForm.setAttribute('class', 'editForm');
    mainContent.insertBefore(editForm, document.querySelector('.todoList'));

    const editElements = {
        title: document.createElement('span'),
        titleInput: document.createElement('input'),
        desc: document.createElement('span'),
        descInput: document.createElement('textarea'),
        buttons: document.createElement('div')
    }

    editElements.title.textContent = 'Title';
    editElements.desc.textContent = 'Description';

    for (let element in editElements) {
        editForm.appendChild(editElements[element]);
    }

}

export {listContent};