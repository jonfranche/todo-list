import {controller} from "./controller";
import {listArray} from "./listArray";

const addListForm = () => {
    const mainContent = document.querySelector('.mainContent');
    const contentElements = {
        h2: document.createElement('h2'),
        title: document.createElement('h3'),
        titleInput: document.createElement('input'),
        desc: document.createElement('h3'),
        descInput: document.createElement('input'),
        submit: document.createElement('button'),
        cancel: document.createElement('button'),
    }

    contentElements.h2.textContent = 'Add New a List';
    contentElements.title.textContent = 'List Title: ';
    contentElements.desc.textContent = 'List Description: ';
    contentElements.submit.textContent = 'Submit';
    contentElements.cancel.textContent = 'Cancel';
    contentElements.titleInput.setAttribute('type', 'text');
    contentElements.descInput.setAttribute('type', 'text');

    const appendForm = () => {
        for (let element in contentElements) {
            contentElements[element].setAttribute('class', `${element}`);
            mainContent.appendChild(contentElements[element]);
        }
    }

    contentElements.cancel.addEventListener('click', function() {
        controller().clearDiv(mainContent);
    });

    contentElements.submit.addEventListener('click', function() {
        let listTitle = contentElements.titleInput.value;
        let listDesc = contentElements.descInput.value;
        controller().addProject(listTitle, listDesc);
        controller().clearDiv(document.querySelector('.projectList'));
        controller().renderList();
        console.log(listArray.length);
        console.log(listArray[listArray.length - 1]);
        controller().clearDiv(mainContent);
    });

    return {
        appendForm
    }
}

export {addListForm};