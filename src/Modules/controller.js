import {Project} from './Project';
import {Todo} from './Todo';
import {listArray} from './listArray';
import {listContent} from './listContent';

const controller = () => {
    const addTodo = (project, title, description, dueDate, priority) => {
        let id = project.todos.length;
        let todo = Todo(title, description, dueDate, priority, id);
        project.todos.push(todo);
    }

    const addProject = (title, description) => {
        let id = listArray.length;
        let project = Project(title, description, id);
        listArray.push(project);
    }

    const clearDiv = (div) => {
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }

    const renderList = () => {
        for (let list in listArray) {
            let div = document.createElement('div');
            div.setAttribute('class', 'list');
            div.setAttribute('id', `list${listArray[list].id}`);
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
                listContent(listArray[list].id);
            });
        }
    }
    

    return {
        addTodo,
        addProject,
        clearDiv,
        renderList
    }
}

export {controller};