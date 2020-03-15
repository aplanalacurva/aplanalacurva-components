import { LionButton } from '@lion/button';
import { alcButtonPrimaryStyles } from './styles/alc-button-primary-styles.js';

// @ts-ignore
export class AlcButtonPrimary extends LionButton {
  static get styles() {
    return [super.styles, alcButtonPrimaryStyles];
  }
}
