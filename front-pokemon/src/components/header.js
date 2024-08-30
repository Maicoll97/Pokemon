
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class HeaderElement extends LitElement {
  static styles = css`
    .alert {
      padding: 20px;
      background-color: #f44336;
      color: white;
    }
  `;
  render() {
    return html`<div class="alert">
    <center>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/375px-International_Pok%C3%A9mon_logo.svg.png'/>
    </center>
  </div>
`;
  }
}

customElements.define('header-element', HeaderElement);
