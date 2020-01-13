import {listArray} from "./listArray";
import {controller} from "./controller";
import {todoContent} from "./todoContent";
import {addTodoForm} from "./addTodoForm";

const listContent = (list) => {
    const mainContent = document.querySelector('.mainContent');
    controller().clearDiv(mainContent);
    const listElements = {
        title: document.createElement('h2'),
        delete: document.createElement('button'),
        description: document.createElement('p'),
        todoList: document.createElement('div'),
        addTodo: document.createElement('button'),
    }

    listElements.title.textContent = listArray[list].title;
    listElements.delete.textContent = 'Delete List';
    listElements.description.textContent = listArray[list].description;
    listElements.addTodo.textContent = 'Add a New Todo';
    for (let element in listElements) {
        mainContent.appendChild(listElements[element]);
        listElements[element].setAttribute('class', `${element}`);
    }

    controller().renderTodos(list);

    listElements.delete.addEventListener('click', function() {
        if (window.confirm("To confirm deleting this List, Press \"OK\"")){
            controller().deleteProject(listArray.indexOf(listArray[list]));
            controller().clearDiv(mainContent);
            controller().renderList();
        }
    })

    listElements.addTodo.addEventListener('click', function() {
        mainContent.removeChild(mainContent.lastChild);
        addTodoForm(mainContent, list);
    });

}

export {listContent};