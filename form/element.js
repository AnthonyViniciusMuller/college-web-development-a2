class AppForm extends HTMLElement {
    async connectedCallback() {    
        const cssFile = await fetch('./form/element.css');
        const style = document.createElement('style');
        style.innerHTML = await cssFile.text()
        document.head.appendChild(style);

        const htmlFile = await fetch('./form/element.html');
        this.innerHTML = await htmlFile.text();
    }
}

window.customElements.define('app-form', AppForm)