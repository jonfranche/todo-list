import {listArray} from "./listArray";
import {controller} from "./controller";

const listContent = (list) => {
    const mainContent = document.querySelector('.mainContent');
    controller().clearDiv(mainContent);
    const listElements = {
        title: document.createElement('h2'),
        description: document.createElement('p'),
        todoList: document.createElement('div'),
        
    }

    listElements.title.textContent = listArray[list].title;
    listElements.description.textContent = listArray[list].description;
    for (let element in listElements) {
        mainContent.appendChild(listElements[element]);
    }
}

export {listContent};