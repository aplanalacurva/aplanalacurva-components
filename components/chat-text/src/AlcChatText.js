import { LitElement, html, css } from 'lit-element';

/**
 * Chat text bubble
 *
 * @element alc-chat-text
 *
 * @slot - The text content (the default slot)
 *
 * @csspart icon
 * @csspart text
 *
 * @cssprop [--alc-chat-text-radius=8px 8px 8px 0] - text border radius
 * @cssprop [--alc-chat-text-text-font-size=16px] - text font size
 * @cssprop [--alc-chat-text-text-bg=#52ca9c] - user text background color
 * @cssprop [--alc-chat-text-text-color=#000] - user text color
 * @cssprop [--alc-chat-text-text-bg-bot=#f3f7f9] - bot text background color
 * @cssprop [--alc-chat-text-text-bg-bot=#000] - bot text color
 */
export class AlcChatText extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      avatar: { type: String },
      bot: {
        type: Boolean,
        reflects: true,
      },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.bot = false;
  }

  render() {
    return html`
      ${this.avatar
        ? html`
            <img part="icon" alt="${this.title}" src="${this.avatar}" />
          `
        : ''}
      <div part="text">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
        padding: 4px 8px;
      }

      [part='icon'] {
        width: 24px;
        margin: 0 5px;
      }

      [part='text'] {
        padding: 16px;
        background-color: var(--alc-chat-text-text-bg, #52ca9c);
        color: var(--alc-chat-text-text-color, #000);
        border-radius: var(--alc-chat-text-radius, 8px 8px 8px 0);
        font-size: var(--alc-chat-text-text-font-size, 16px);
        word-break: break-word;
      }

      :host([bot]) [part='text'] {
        background-color: var(--alc-chat-text-text-bg-bot, #f3f7f9);
        color: var(--alc-chat-text-text-bg-bot, #000);
      }

      @media (max-width: 768px) {
        :host([bot]) {
          flex-direction: row-reverse;
        }
      }
    `;
  }
}
