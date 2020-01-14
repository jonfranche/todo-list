import {addListForm} from './addListForm';
import {controller} from './controller';

const sidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const sideElements = {
        titleDiv: document.createElement('div'),
        projectList: document.createElement('div'),
        addProject: document.createElement('button'),
    }

    sideElements.addProject.textContent = 'Add a New List';

    for (let element in sideElements) {
        sideElements[element].setAttribute('class', `${element}`);
        sidebar.appendChild(sideElements[element]);
    }

    const sideTitle = document.createElement('h2');
    const arrow = document.createElement('i');
    sideTitle.textContent = 'Your Lists';

    sideElements.titleDiv.appendChild(sideTitle);
    sideElements.titleDiv.appendChild(arrow);
    arrow.setAttribute('class', 'left');
    controller().renderList();

    sideElements.addProject.addEventListener('click', function() {
        controller().clearDiv(document.querySelector('.mainContent'));
        addListForm().appendForm();
    });
}

export {sidebar};