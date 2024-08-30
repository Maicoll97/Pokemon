import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '../utils/alert_util.js';

class PokemonEvalution extends LitElement {
  static styles = css`
    .grid-container {
      width: 500px;
      margin: 0 auto;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    .card {
      box-shadow: 0px 0px 3px 1px rgba(125, 123, 121, 0.77);
      padding: 1rem;
      width: 200px;
      height: 200px;
      cursor: pointer;
    }
  `;

  static properties = {
    name: { type: String },
    evolutions: { type: Array }
  };

  constructor() {
    super();
    this.name = '';
    this.evolutions = [];
  }

  render() {
    return html`
     <h3>Evolutions of ${this.name}</h3>
      <div class="grid-container">
        ${this.evolutions?.map(pokemon => html`
          <div class="card">
            <center>
              <img src="./src/assets/${pokemon.name}.png" alt="${pokemon.name}" width="100" height="100">
              <br/>
              ${pokemon.name} (${pokemon.type})
            </center>
          </div>
        `)}
      </div>
    `;
  }

}

customElements.define('pokemon-evolution', PokemonEvalution);
