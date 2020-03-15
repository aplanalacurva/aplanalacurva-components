import { LionButton } from '@lion/button';
import { alcButtonSecondaryStyles } from './styles/alc-button-secondary-styles.js';

// @ts-ignore
export class AlcButtonSecondary extends LionButton {
  static get styles() {
    return [super.styles, alcButtonSecondaryStyles];
  }
}
