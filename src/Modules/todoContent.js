import {listArray} from "./listArray";
import {controller} from "./controller";

const todoContent = (div, list, activeTodo) => {
    let todoIndex = listArray[list].todos.indexOf(listArray[list].todos[activeTodo]);

    const checkbox = document.createElement('input');
    const title = document.createElement('span');
    const arrow = document.createElement('i');

    const todoElements = {
        info: document.createElement('div'),
        description: document.createElement('p'),
        edit: document.createElement('button'),
        delete: document.createElement('button'),
    }

    const date = document.createElement('span');
    const priority = document.createElement('span');

    div.setAttribute('class', 'todo');
    div.appendChild(checkbox);
    div.appendChild(title);
    div.appendChild(arrow);

    title.textContent = listArray[list].todos[activeTodo].title;
    checkbox.setAttribute('type', 'checkbox');
    arrow.setAttribute('class', 'down');

    todoElements.description.setAttribute('class', 'todoDesc');
    todoElements.description.textContent = listArray[list].todos[activeTodo].description;
    
    todoElements.edit.textContent = 'Edit';
    todoElements.delete.textContent = 'Delete this Todo';

    let dropdown = document.createElement('div');
    //dropdown.setAttribute('class', 'hidden');
    dropdown.setAttribute('id', `todo${todoIndex}`);
    div.appendChild(dropdown);

    for (let element in todoElements){
        dropdown.appendChild(todoElements[element]);
    }

    todoElements.info.setAttribute('class', 'todoInfo');

    todoElements.info.appendChild(date);
    todoElements.info.appendChild(priority);

    switch(listArray[list].todos[activeTodo].priority) {
        case 'Low':
            priority.setAttribute('style', 'color: #ffe033');
            break;
        case 'Medium':
            priority.setAttribute('style', 'color: #ff8f33');
            break;
        case 'High':
            priority.setAttribute('style', 'color: #f72424');
            break;
        default:
            break;
    }
    
    date.textContent = `Due: ${listArray[list].todos[activeTodo].dueDate}`;
    priority.textContent = `Priority: ${listArray[list].todos[activeTodo].priority}`;

    title.addEventListener('click', function() {
        let x = document.getElementById(`todo${todoIndex}`);
        if (window.getComputedStyle(x).display === 'none') {
            x.removeAttribute('class', 'hidden');
            arrow.removeAttribute('class', 'right');
            arrow.setAttribute('class', 'down');
        } else {
            x.setAttribute('class', 'hidden');
            arrow.removeAttribute('class', 'down');
            arrow.setAttribute('class', 'right');
        }
    });
}

export {todoContent};