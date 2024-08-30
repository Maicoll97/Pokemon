import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { fetchPokemons } from '../service/api_service.js';
import '../utils/alert_util.js';
import '../components/pokemon-evolution.js';

class PokemonList extends LitElement {
  static styles = css`
    .grid-container {
      max-width: 1200px;
      width: 800px;
      margin: 0 auto;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
    pokemons: { type: Array },
    showModal: { type: Boolean },
    name: { type: String },
    evolutions: { type: Array }
  };

  constructor() {
    super();
    this.pokemons = [];
    this.showModal = false;
    this.name = '';
    this.evolutions = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.loadPokemons();
    //Agregar modal-closed evento para escuchan cuando se cierra el modal desde el componente 
    this.addEventListener('modal-closed', this.handleModalClosed.bind(this));
  }

  async loadPokemons() {
    try {
      this.pokemons = await fetchPokemons();
    } catch (error) {
      console.error('Error fetching pokemons:', error);
    }
  }

  /*
  * Escuchar el evento modal-closed para cerrar el modal.
  */
  handleModalClosed() {
    this.showModal = false;
  }

  render() {
    return html`
      <div class="grid-container">
        ${this.pokemons.map(pokemon => html`
          <div class="card" @click="${() => this.handleCardClick(pokemon.name, pokemon.evolutions)}">
            <center>
              <img src="./src/assets/${pokemon.image}" alt="${pokemon.image}" width="100" height="100">
              <br/>
              ${pokemon.name} (${pokemon.type})
            </center>
          </div>
        `)}
      </div>
      <br/>
      <custom-modal  .opened="${this.showModal}" >
         <pokemon-evolution name="${this.name}" .evolutions="${this.evolutions}"></pokemon-evolution>
      </custom-modal>
    `;
  }

  handleCardClick(name, evolutions) {
    this.name = name;
    this.evolutions = evolutions;
    this.showModal = true;
  }
}

customElements.define('pokemon-list', PokemonList);
