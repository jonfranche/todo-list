import {listArray} from "./listArray";
import {controller} from "./controller";

const todoContent = (div, list, activeTodo) => {
    const todoElements = {
        //checkbox: document.createElement('input'),
        title: document.createElement('span'),
        description: document.createElement('span'),
        date: document.createElement('span'),
        priority: document.createElement('span')
    }

    todoElements.title.textContent = listArray[list].todos[activeTodo].title
    
    div.appendChild(todoElements.title);
}

export {todoContent};