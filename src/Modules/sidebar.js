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
    sideElements.addProject.textContent = 'Add Project';

    for (let element in sideElements) {
        sideElements[element].setAttribute('class', `${element}`);
        sidebar.appendChild(sideElements[element]);
    }

    const renderList = () => {
        let total = controller().ProjectArray.length;
        for (let list in controller().ProjectArray) {
            let div = document.createElement('div');
            div.textContent = controller().ProjectArray[list].title;
            sideElements.projectList.appendChild(div);
        }
    }

    renderList();
    addListForm();

    sideElements.addProject.addEventListener('click', function() {
        addListForm().appendForm();
    });
}

export {sidebar};