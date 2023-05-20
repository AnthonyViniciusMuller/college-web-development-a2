class AppForm extends HTMLElement {
    async connectedCallback() {    
        const cssFile = await fetch('./form/element.css');
        const style = document.createElement('style');
        style.innerHTML = await cssFile.text()
        document.head.appendChild(style);

        const htmlFile = await fetch('./form/element.html');
        this.innerHTML = await htmlFile.text();

        const contactInfoUp = this.getAttribute('contact-info-up');

        const p = document.createElement("p");
        p.innerText = "Informações de Contato";

        if (contactInfoUp) {
            const section = document.createElement("section");
            section.appendChild(p);
            this.querySelector(".contacts").prepend(section);
        }

        const title = this.getAttribute('title');
        this.querySelector(".title").innerText = title;
    }
}

window.customElements.define('app-form', AppForm)