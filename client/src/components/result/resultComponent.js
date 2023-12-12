class ResultComponent {
    constructor(value) {
        this.value = value;
        this.element = document.getElementById('resultContainer')
    }
    render() {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = '/src/components/result/resultComponent.css';
        document.head.appendChild(linkElement);
        this.element.innerText = `Результат: ${this.value}`;
    }
}

export default ResultComponent;