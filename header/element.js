class AppHeader extends HTMLElement {
    async connectedCallback() {    
        const cssFile = await fetch('./header/element.css');
        const style = document.createElement('style');
        style.innerHTML = await cssFile.text()
        document.head.prepend(style);

        const htmlFile = await fetch('./header/element.html');
        this.innerHTML = await htmlFile.text();
    }
}

window.customElements.define('app-header', AppHeader)