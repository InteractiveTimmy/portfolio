import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import CONSTANTS from './app.constants';
import styles from './app.styles';

@customElement(CONSTANTS.ELEMENT_NS)
class App extends LitElement {
  public static override styles = styles;

  public override render(): TemplateResult {
    return html`<slot/>`;
  }
}

export default App;
