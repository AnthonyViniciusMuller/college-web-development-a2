class AppFooter extends HTMLElement {
    async connectedCallback() {    
        const cssFile = await fetch('./footer/element.css');
        const style = document.createElement('style');
        style.innerHTML = await cssFile.text()
        document.head.appendChild(style);

        const htmlFile = await fetch('./footer/element.html');
        this.innerHTML = await htmlFile.text();
    }
}

window.customElements.define('app-footer', AppFooter)