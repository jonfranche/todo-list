import {Project} from './Project';
import {Todo} from './Todo';
import {listArray} from './listArray';
import {listContent} from './listContent';

const controller = () => {
    const addTodo = (project, title, description, dueDate, priority) => {
        let todo = Todo(title, description, dueDate, priority);
        project.todos.push(todo);
    }

    const addProject = (title, description) => {
        let project = Project(title, description);
        listArray.push(project);
    }

    const deleteProject = (list) => {
        listArray.splice(listArray.indexOf(listArray[list]), 1);
    }

    const clearDiv = (div) => {
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }

    const renderList = () => {
        clearDiv(document.querySelector('.projectList'));
        for (let list in listArray) {
            let div = document.createElement('div');
            div.setAttribute('class', 'list');
            div.setAttribute('id', `list${listArray.indexOf(listArray[list])}`);
            document.querySelector('.projectList').appendChild(div);
            const divElements = {
                title: document.createElement('span'),
                todosCount: document.createElement('span'),
            }
            for (let element in divElements) {
                div.appendChild(divElements[element])
            }
            divElements.title.textContent = `${listArray[list].title}`;
            divElements.todosCount.textContent = `${listArray[list].todos.length}`;
            divElements.title.addEventListener('click', function() {
                listContent(listArray.indexOf(listArray[list]));
            });
        }
    }
    

    return {
        addTodo,
        addProject,
        deleteProject,
        clearDiv,
        renderList
    }
}

export {controller};