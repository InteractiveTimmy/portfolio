import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
  colors,
  dark,
  light,
} from '../../tokens';

import CONSTANTS from './provider.constants';
import styles from './provider.styles';

@customElement(CONSTANTS.ELEMENT_NS)
class App extends LitElement {
  @property({ attribute: true, reflect: true })
  public pallets: string = CONSTANTS.DEFAULTS.PALLETS;

  @property({ attribute: true, reflect: true })
  public theme: string = CONSTANTS.DEFAULTS.THEME;

  public static override styles = [
    colors,
    dark,
    light,
    styles,
  ];

  public override render(): TemplateResult {
    return html`<slot/>`;
  }
}

export default App;
