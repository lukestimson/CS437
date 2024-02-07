import { LitElement, html, css, customElement, state } from 'lit';

@customElement('drop-down')
class DropDown extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
    }
    .dropdown-content.show {
      display: block;
    }
  `;

  @state() private show = false;

  private toggleDropdown() {
    this.show = !this.show;
  }

  render() {
    return html`
      <slot name="trigger" @click="${this.toggleDropdown}"></slot>
      <div class="dropdown-content ${this.show ? 'show' : ''}">
        <slot name="content"></slot>
      </div>
    `;
  }
}
