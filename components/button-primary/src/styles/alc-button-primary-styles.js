import { css } from 'lit-element';

export const alcButtonPrimaryStyles = css`
  :host([hidden]) {
    display: none !important;
  }

  .btn {
    padding: 0.5rem 1rem;
    background-color: #52ca9c;
    color: #ffffff;
    font-family: ArialMT;
    border: 1px solid transparent;
    border-radius: 3rem;
  }

  :host(:focus:not([disabled])) .btn {
    box-shadow: none;
    outline: 2px solid rgba(82, 202, 156, 0.4);
  }

  :host(:hover) .btn {
    cursor: pointer;
    background-color: #52ca9c;
    box-shadow: 2px 2px 6px 2px rgba(82, 202, 156, 0.4);
  }

  :host(:active) .btn, /* keep native :active to render quickly where possible */
:host([active]) .btn /* use custom [active] to fix IE11 */ {
    background-color: #52ca9c;
  }

  :host([disabled]) .btn {
    pointer-events: none;
    cursor: default;
    box-shadow: none;
    background-color: #ccc;
    color: #767676;
    box-shadow: none;
  }
`;
