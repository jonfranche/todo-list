import {Project} from './Project';
import {Todo} from './Todo';

const controller = () => {
    const addTodo = (project, title, description, dueDate, priority) => {
        let id = project.todos.length;
        let todo = Todo(title, description, dueDate, priority, id);
        project.todos.push(todo);
    }

    const addProject = (arr, title, description) => {
        let id = arr.length;
        let project = Project(title, description, id);
        arr.push(project);
    }

    const ProjectArray = [];
    addProject(ProjectArray, 'General', 'Project description here');
    addProject(ProjectArray, 'List 2', 'description 2');

    addTodo(ProjectArray[0], 'Task 1', 'description 1', 'January 1, 2020', 3);
    addTodo(ProjectArray[0], 'Task 2', 'description 2', 'February 1, 2020', 2);
    addTodo(ProjectArray[0], 'Task 3', 'description 3', 'March 1, 2020', 1);

    return {
        addTodo,
        addProject,
        ProjectArray,
    }
}

export {controller};