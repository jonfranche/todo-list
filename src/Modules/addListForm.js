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

    return {
        appendForm
    }
}

export {addListForm};