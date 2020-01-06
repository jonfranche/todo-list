import {listArray} from "./listArray";
import {controller} from "./controller";

const listContent = (list) => {
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

    
}

export {listContent};