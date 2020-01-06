import {listArray} from "./listArray";
import {controller} from "./controller";
import {todoContent} from "./todoContent";

const listContent = (list) => {
    let todoArr = listArray[list].todos;
    const mainContent = document.querySelector('.mainContent');
    controller().clearDiv(mainContent);
    const listElements = {
        title: document.createElement('h2'),
        description: document.createElement('p'),
        todoList: document.createElement('div'),
        addTodo: document.createElement('button'),
    }

    listElements.title.textContent = listArray[list].title;
    listElements.description.textContent = listArray[list].description;
    listElements.addTodo.textContent = 'Add a New Todo';
    for (let element in listElements) {
        mainContent.appendChild(listElements[element]);
        listElements[element].setAttribute('class', `${element}`);
    }

    const renderTodos = () => {
        for (let activeTodo in todoArr) {
            let div = document.createElement('div');
            listElements.todoList.appendChild(div);
            todoContent(div, list, activeTodo);
        }
    }

    renderTodos();

    listElements.addTodo.addEventListener('click', function() {
        
    });
}

export {listContent};