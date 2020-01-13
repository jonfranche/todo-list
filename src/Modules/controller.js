import {Project} from './Project';
import {Todo} from './Todo';
import {listArray} from './listArray';
import {listContent} from './listContent';
import {todoContent} from './todoContent';

const controller = () => {
    const addTodo = (project, title, description, dueDate, priority) => {
        let todo = Todo(title, description, dueDate, priority);
        project.todos.push(todo);
    }

    const addProject = (title, description) => {
        let project = Project(title, description);
        listArray.push(project);
    }

    const deleteTodo = (list, activeTodo) => {
        listArray[list].todos.splice(listArray[list].todos.indexOf(listArray[list].todos[activeTodo]), 1);
    }

    const deleteProject = (list) => {
        listArray.splice(listArray.indexOf(listArray[list]), 1);
    }

    const editTodo = (list, activeTodo, title, description, dueDate, priority) => {
        listArray[list].todos[activeTodo].title = title;
        listArray[list].todos[activeTodo].description = description;
        listArray[list].todos[activeTodo].dueDate = dueDate;
        listArray[list].todos[activeTodo].priority = priority;
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

            if (listArray[list].title.length > 20) {
                divElements.title.textContent = `${listArray[list].title.slice(0, 16)}...`;
            } else {
                divElements.title.textContent = `${listArray[list].title}`;
            }
            divElements.todosCount.textContent = `${listArray[list].todos.length}`;
            divElements.title.addEventListener('click', function() {
                listContent(listArray.indexOf(listArray[list]));
            });
        }
    }
    
    const renderTodos = (activeList) => {
        for (let activeTodo in listArray[activeList].todos) {
            let div = document.createElement('div');
            document.querySelector('.todoList').appendChild(div);
            todoContent(div, activeList, activeTodo);
        }
    }

    return {
        addTodo,
        addProject,
        deleteTodo,
        deleteProject,
        editTodo,
        clearDiv,
        renderTodos,
        renderList
    }
}

export {controller};