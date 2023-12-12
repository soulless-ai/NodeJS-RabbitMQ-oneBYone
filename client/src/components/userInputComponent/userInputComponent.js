import config from '../../config.js';
import ResultComponent from '../result/resultComponent.js';

class UserInputComponent {
    constructor(element) {
        this.element = element;
    }

    createForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Напишите что-нибудь...';

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Отправить';

        form.appendChild(input);
        form.appendChild(submitButton);

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.onClickSubmit(input.value);
        });

        return form;
    }

    render() {
        const form = this.createForm();
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = '/src/components/userInputComponent/userInputComponent.css';
        document.head.appendChild(linkElement);
        this.element.innerHTML = `
            <h1>Введите запрос</h1>
        `;
        this.element.appendChild(form);
    }

    onClickSubmit(inputValue) {
        fetch(config.apiUrl + '/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: parseInt(inputValue, 10) }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const result = new ResultComponent(data.result);
            result.render();
        })
        .catch(error => console.error('Error:', error));
    }
}

export default UserInputComponent;