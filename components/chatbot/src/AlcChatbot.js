// Import the LitElement base class and html helper function
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '@aplanalacurva/chat-text/alc-chat-text.js';
import '@aplanalacurva/chat-form/alc-chat-form.js';

/**
 * Chatbot
 *
 * @element alc-chatbot
 *
 * @csspart icon-close
 * @csspart logo
 * @csspart text
 * @csspart icon
 * @csspart text
 * @csspart container
 * @csspart icon-send
 *
 * @cssprop [--alc-chatbot-bubble-background=#FFF] - bubble background color
 * @cssprop [--alc-chatbot-header-background=#061b2b] - bubble header background color
 * @cssprop [--alc-chatbot-bubble-width=350px] - bubble width
 * @cssprop [--alc-chatbot-bubble-height=500px] - bubble height
 */
export class AlcChatbot extends LitElement {
  static get properties() {
    return {
      api: { type: String },
      logo: { type: String },
      closeImg: { type: String, attribute: 'close-image' },
      errorMessage: { type: String, attribute: 'error-message' },
      opened: { type: Boolean },
      messages: { type: Array },
      userIcon: { type: String, attribute: 'user-icon' },
      botIcon: { type: String, attribute: 'bot-icon' },
      sendIcon: { type: String, attribute: 'send-icon' },
      chatbotIcon: { type: String, attribute: 'chatbot-icon' },
      defaultTextInput: { type: String, attribute: 'default-text-input' },
    };
  }

  constructor() {
    super();
    this.opened = false;
    this.defaultTextInput = '';
    this.api = '';
    this.errorMessage = 'Lo sentimos, en estos momentos no podemos atenderle. Inténtelo más tarde.';
    this.messages = [];
  }

  firstUpdated(props) {
    super.firstUpdated(props);
    this._container = this.shadowRoot.getElementById('container');
  }

  _request(value) {
    fetch(this.api, {
      method: 'POST',
      body: JSON.stringify({ text: value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        this._addMessage(res.text, true);
      })
      .catch(() => {
        this._addMessage(this.errorMessage, true);
      });
  }

  _addMessage(message, isBot = false) {
    this.messages = [...this.messages, { bot: isBot, text: message }];
  }

  _addText(evt) {
    const text = evt.detail.text || '';
    if (text) {
      this._addMessage(text);
      this._request(text);
    }
  }

  get _header() {
    return html`
      <div part="header">
        ${this.logo
          ? html`
              <img title="Logo" part="logo" src="${this.logo}" />
            `
          : ''}
        <img
          title="Close"
          part="icon-close"
          class="pointer close"
          src="${this.closeImg}"
          @click="${() => {
            this.opened = false;
          }}"
        />
      </div>
    `;
  }

  get _footer() {
    return html`
      <div part="footer">
        <alc-chat-form
          exportparts="container icon-send"
          .value="${this.defaultTextInput}"
          @alc-chat-form-send="${this._addText}"
          icon="${this.sendIcon}"
        ></alc-chat-form>
      </div>
    `;
  }

  render() {
    return html`
      <button
        aria-label="Abrir conversación con Chatbot"
        style="${styleMap({ backgroundImage: `url(${unsafeCSS(this.chatbotIcon)})` })}"
        part="bubble-btn"
        class="pointer"
        ?hidden="${this.opened}"
        @click="${() => {
          this.opened = true;
        }}"
      ></button>
      <div id="bubble" part="bubble" ?hidden="${!this.opened}">
        ${this._header}
        <div id="container" part="container">
          ${this.messages.map(
            item => html`
              <alc-chat-text
                exportparts="icon text"
                ?bot=${AlcChatbot.isBot(item)}
                avatar=${AlcChatbot.isBot(item) ? this.botIcon : this.userIcon}
              >
                ${AlcChatbot.isBot(item) ? unsafeHTML(item.text) : item.text}
              </alc-chat-text>
            `,
          )}
        </div>
        ${this._footer}
      </div>
    `;
  }

  static isBot(item) {
    return ifDefined(item.bot) && item.bot;
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('messages')) {
      this.updateComplete.then(() => {
        this._container.scrollTop = this._container.scrollHeight;
      });
    }
  }

  static get styles() {
    return css`
      [hidden] {
        display: none !important;
      }

      .close {
        width: 16px;
      }

      [part='bubble-btn'] {
        cursor: pointer;
        background-size: cover;
        background-position: center;
        position: fixed;
        bottom: 20px;
        border: none;
        right: 20px;
        width: 48px;
        height: 48px;
        line-height: 65px;
        z-index: 101;
      }

      [part='bubble'] {
        z-index: 101;
        position: fixed;
        bottom: 0;
        height: 100%;
        right: 0;
        width: 100%;
        top: 0;
        max-height: none;
        max-width: none;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: var(--alc-chatbot-bubble-background, #fff);
      }

      [part='header'] {
        align-items: center;
        padding: 8px 16px;
        flex: 0 0 auto;
        justify-content: space-between;
        display: flex;
        background: var(--alc-chatbot-header-background, #061b2b);
      }

      [part='icon'] {
        height: 30px;
      }

      [part='container'] {
        flex-grow: 1;
        overflow-y: scroll;
      }

      [part='footer'] {
        height: 40px;
        flex: 0 0 auto;
      }

      alc-chat-text:not([bot]) {
        flex-direction: row-reverse;
        --alc-chat-text-radius: 8px 8px 0 8px;
      }

      @media (min-width: 768px) {
        [part='bubble'] {
          border-radius: 8px;
          box-shadow: var(--alc-chatbot-bubble-width, 0 2px 4px 0 rgba(0, 0, 8, 0.2));
          top: auto;
          left: auto;
          bottom: 20px;
          right: 2%;
          width: var(--alc-chatbot-bubble-width, 350px);
          height: var(--alc-chatbot-bubble-height, 500px);
        }
      }
    `;
  }
}
