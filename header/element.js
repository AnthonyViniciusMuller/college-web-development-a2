class AppHeader extends HTMLElement {
    async connectedCallback() {    
        const cssFile = await fetch('./header/element.css');
        const style = document.createElement('style');
        style.innerHTML = await cssFile.text()
        document.head.prepend(style);

        const htmlFile = await fetch('./header/element.html');
        this.innerHTML = await htmlFile.text();

        [...this.querySelectorAll("nav a")].map(ancor => {
            if (ancor.href == window.location.href) {
                ancor.style.color = "rgba(178, 183, 74, 1)";
            }
        })
    }
}

window.customElements.define('app-header', AppHeader)