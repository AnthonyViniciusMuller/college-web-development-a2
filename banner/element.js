class AppBanner extends HTMLElement {
    async connectedCallback() {    
        const cssFile = await fetch('./banner/element.css');
        const style = document.createElement('style');
        style.innerHTML = await cssFile.text()
        document.head.prepend(style);

        const htmlFile = await fetch('./banner/element.html');
        this.innerHTML = await htmlFile.text();

        if (this.hasAttribute('img')) {
            this.querySelector('img').src = this.getAttribute('img');
        } 

        const links = Array.from(this.getAttribute('links').split(','))

        links.forEach((link) => {
            const p = document.createElement("p");
            p.innerText = link;
            p.className = "double-arrow";

            this.querySelector("div").appendChild(p);
        })
    }
}

window.customElements.define('app-banner', AppBanner)