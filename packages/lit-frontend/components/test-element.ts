import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-element')
class TestElement extends LitElement {
    static styles = css`
    p {
      color: blue;
    }
  `;

    render() {
        return html`<p>Hello from Test Element!</p>`;
    }
}
