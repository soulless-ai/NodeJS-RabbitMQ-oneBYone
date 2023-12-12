import UserInputComponent from './components/userInputComponent/userInputComponent.js';

const inputForm = document.getElementById('inputForm');
const userInput = new UserInputComponent(inputForm);
userInput.render();