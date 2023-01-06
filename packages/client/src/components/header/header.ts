import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import CONSTANTS from './header.constants';
import styles from './header.styles';

@customElement(CONSTANTS.ELEMENT_NS)
class App extends LitElement {
  @property({ attribute: true, reflect: true })
  public solid: boolean = CONSTANTS.DEFAULTS.SOLID;

  public static override styles = styles;

  public override render(): TemplateResult {
    return html`<slot/>`;
  }
}

export default App;
