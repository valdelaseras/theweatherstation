'use strict';

class CSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.querySelector(".section-title").innerText = this.id;
    }
}

customElements.define('c-section', CSection);
