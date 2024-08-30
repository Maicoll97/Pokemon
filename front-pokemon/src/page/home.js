import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../components/pokemon-list.js';

class HomePage extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
        <pokemon-list></pokemon-list>
    `;
    }
}

customElements.define('home-page', HomePage);
