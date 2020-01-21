import {pageLoad} from './Modules/page-load';
import {controller} from './Modules/controller';
import {listArray} from './Modules/listArray';

controller();

pageLoad();

if (localStorage.length > 0) {
    for (let x = 0; x < localStorage.length; x++) {
        listArray.push(JSON.parse(localStorage.getItem(`list${x}`)));
    }
} else {
    // This sets up the App for first time use.
    controller().addProject('Tutorial - BEGIN HERE', 'Hello, and welcome to Todo List.');
    controller().addProject('General', 'Your Daily list of todos');
    controller().addTodo(listArray[0], 'Click here to see more information', 'Click the \'+ Edit Todo\' button below to change the Title, description, due date, and/or the priority of the todo', '', 'High');
    controller().addTodo(listArray[0], '<- Click the checkbox to mark the todo as finished', '', '', 'Low');
    controller().addTodo(listArray[0], 'Click the \'+ Add New Todo\' to create a new todo', '', '', 'None');
    controller().addTodo(listArray[0], 'Click the orange \'Show Completed\' button on the top', 'This shows todos that you have completed previously.', '', 'Medium');
    controller().addTodo(listArray[0], 'Click the red \'Delete List\' to finish this Tutorial', '', '', 'Low');
}

controller().renderList();
