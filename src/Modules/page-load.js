//import {controller} from './controller';
import {sidebar} from './sidebar';

const pageLoad = () => {
    /*controller();

    const projectArr = controller().ProjectArray;

    controller().addProject(projectArr, 'Test 2', 'Project Description');

    const body = document.querySelector('body');

    const addTodoButton = document.createElement('button');
    addTodoButton.textContent = 'Add Todo';
    body.appendChild(addTodoButton);

    const printTodosButton = document.createElement('button');
    printTodosButton.textContent = 'Print Todos';
    body.appendChild(printTodosButton);

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add Project';
    body.appendChild(addProjectButton);

    const printProjectsButton = document.createElement('button');
    printProjectsButton.textContent = 'Print Projects';
    body.appendChild(printProjectsButton);

    printTodosButton.addEventListener('click', function() {
        const array = projectArr[0].todos;
        for (let x in array) {
            console.log(array[x].id);
        }
    });

    addTodoButton.addEventListener('click', function() {
        controller().addTodo(projectArr[0], 
            `Task ${todoCount}`, 
            `description ${todoCount}`, 
            'date');
        console.log('Todo Added');
    });

    printProjectsButton.addEventListener('click', function() {
        for (let x in projectArr) {
            console.log(projectArr[x].id);
        }
    });

    addProjectButton.addEventListener('click', function() {
        controller().addProject(projectArr, `Project ${projectCount}`, 
            `Project description ${projectCount}`);
        console.log('Project Added');
    });*/

    const body = document.querySelector('body');
    const bodyElements = {
        header: document.createElement('header'),
        main: document.createElement('div'),
    }

    bodyElements.main.setAttribute('class', 'main');

    for (let element in bodyElements) {
        body.appendChild(bodyElements[element]);
    }

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Todo List';
    bodyElements.header.appendChild(pageTitle);

    const main = document.querySelector('.main');

    const mainElements = {
        sidebar: document.createElement('div'),
        mainContent: document.createElement('div'),
    }

    for (let element in mainElements) {
        mainElements[element].setAttribute('class', `${element}`);
        main.appendChild(mainElements[element]);
    }

    sidebar();
}

export {pageLoad};