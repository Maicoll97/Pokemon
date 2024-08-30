import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class CustomModal extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    :host([opened]) {
      visibility: visible;
      opacity: 1;
    }
    .modal-content {
      background: #fff;
      margin: 15% auto;
      padding: 20px;
      width: 80%;
      max-width: 600px;
      border-radius: 5px;
      position: relative;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }
    .button {
      margin-left: 10px;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .confirm {
      background-color: #28a745;
      color: white;
    }
    .cancel {
      background-color: #dc3545;
      color: white;
    }
  `;

  static properties = {
    opened: { type: Boolean, reflect: true },
    title: { type: String },
  };

  constructor() {
    super();
    this.opened = false;
    this.title = '';
  }

  closeModal() {
    this.opened = false;
    /**
     * desencadenar el evento modal-closed 
     * para que sea escuchado por el event listeners
     */
    this.dispatchEvent(new CustomEvent('modal-closed', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <div class="modal-content">
        <span class="close" @click="${this.closeModal}">&times;</span>
        <h2>${this.title}</h2>
        <div>
            <!-- Aquí se renderizará el contenido pasado -->
              <slot></slot>
            <!-- Aquí se renderizará el contenido pasado -->
        </div>
        <div class="buttons">
          <button class="button cancel" @click="${this.closeModal}">Atras</button>
        </div>
      </div>
    `;
  }

}

customElements.define('custom-modal', CustomModal);
