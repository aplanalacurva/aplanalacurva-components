import { LitElement, html, css } from 'lit-element';

/**
 * Chat form
 *
 * @element alc-chat-form
 *
 * @csspart container
 * @csspart icon-send
 *
 * @cssprop [--alc-chat-form-textarea-background=#f3f7f9] - textarea background color
 * @cssprop [--alc-chat-form-textarea-color=#000000] - textarea color
 * @cssprop [--alc-chat-form-font-size=16px] - textarea font size
 */
export class AlcChatForm extends LitElement {
  static get properties() {
    return {
      accessibleDescription: {
        type: String,
      },
      icon: {
        type: String,
      },
      value: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.value = '';
    this._formElementId = AlcChatForm.uniqueID();
    this.accessibleDescription = 'Enviar mensaje';
  }

  /**
   * Random unique ID for textarea
   * @param  {Number} length Length of random ID
   * @return {String}        Unique ID
   */
  static uniqueID(length = 10) {
    return `_${Math.random()
      .toString(36)
      .substr(2, length)}`;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this._textarea = this.shadowRoot.querySelector('textarea');
  }

  render() {
    return html`
      <div part="container">
        <textarea
          id="${this._formElementId}"
          type="text"
          .value="${this.value}"
          @input="${this._onInput}"
          @keypress="${this._onKeyPress}"
          placeholder="Escribe"
          aria-labelledby="description${this._formElementId}"
        ></textarea>
        <span style="display: none;" id="description${this._formElementId}">
          ${this.accessibleDescription}
        </span>
        ${this.icon
          ? html`
              <button @click="${this._send}">
                <img alt="Enviar" src="${this.icon}" part="icon-send" />
              </button>
            `
          : ''}
      </div>
    `;
  }

  static get styles() {
    return css`
      [part='container'] {
        position: relative;
        height: 100%;
      }

      textarea {
        width: 100%;
        outline: none;
        background: var(--alc-chat-form-textarea-background, #f3f7f9);
        color: var(--alc-chat-form-textarea-color, #000000);
        resize: none;
        box-sizing: border-box;
        border: none;
        height: 100%;
        line-height: 30px;
        padding: 5px;
        padding-right: 40px;
        font-size: var(--alc-chat-form-font-size, 16px);
      }

      button {
        position: absolute;
        height: 100%;
        top: auto;
        outline: none;
        right: 0;
        background: none;
        border: none;
        cursor: pointer;
      }

      button img {
        width: 24px;
      }
    `;
  }

  _onInput(e) {
    this.value = e.target.value.trim();
  }

  _onKeyPress(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      if (this.value) {
        this._send();
      }
    }
  }

  _send() {
    /**
     * Fired when send button is clicked
     * @event alc-chat-form-send
     * @param {String} text Text sent from the field
     */
    this.dispatchEvent(
      new CustomEvent('alc-chat-form-send', {
        composed: true,
        bubbles: true,
        detail: {
          text: this.value,
        },
      }),
    );
    this.value = '';
    this._textarea.value = this.value;
  }
}
