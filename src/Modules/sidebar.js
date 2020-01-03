import {addListForm} from './addListForm';
import {controller} from './controller';

const sidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const sideElements = {
        sideTitle: document.createElement('h2'),
        projectList: document.createElement('div'),
        addProject: document.createElement('button'),
    }

    sideElements.sideTitle.textContent = 'Your Lists';
    sideElements.addProject.textContent = 'Add a New List';

    for (let element in sideElements) {
        sideElements[element].setAttribute('class', `${element}`);
        sidebar.appendChild(sideElements[element]);
    }

    controller().renderList();

    sideElements.addProject.addEventListener('click', function() {
        controller().clearDiv(document.querySelector('.mainContent'));
        addListForm().appendForm();
    });
}

export {sidebar};