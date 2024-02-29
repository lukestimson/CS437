/* The drop-down component is  responsible for controlling the visibility of the dropdown menu.
It acts as a container for both the trigger element (icon that users click to open the dropdown)
and the dropdown content itself (the menu).  */


import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import './user-panel'; // Import the user-panel component

@customElement('drop-down')
export class DropDownElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      cursor: pointer;
    }
    .profile-icon {     /* This style is referenced from index.html within the drop-down comp */
      width: 50px; /* Adjust size as needed */
      height: 50px;
      border-radius: 50%;
      background-image: url('/images/profilePhoto.jpg');
      background-size: cover;
      border: 3px solid white; /* Optional: style as needed */
    }
    .menu {
      display: none;
      position: absolute;
      top: 120%;
      right: 0; /* Aligns the menu to the right edge of the profile icon */
      border: 3px solid;
      background: var(--header-bg-color);
      z-index: 100; /* Ensure dropdown is above other content */
    }
    :host([open]) .menu {           /* When open is set, the drop down is opened */
      display: block;
    }
  `;

  private open = false;

  render() {
    return html`
      <div class="profile-icon"></div>
    `;
  }

  // render() {
  //   return html`
  //     <div class="profile-icon" @click="${this.toggleDropdown}"></div>
  //     ${this.open ? html`<user-panel></user-panel>` : ``}
  //   `;
  // }


  toggleDropdown() {
    this.open = !this.open;
    this.setAttribute('open', this.open.toString()); // Reflects the state to an attribute
    this.requestUpdate(); // Requests an update for re-rendering
  }
}
