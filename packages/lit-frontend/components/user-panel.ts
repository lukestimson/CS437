import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('user-panel')
class UserPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 10px;
      background: var(--panel-background-color, black);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      min-width: 200px; /* Ensure it's not too narrow */
    }
    a {
      display: block;
      color: var(--text-color, black);
      text-decoration: none;
      padding: 8px 0; /* Add padding for better clickability */
      text-align: center; /* Center align links */
    }
    a:hover {
      background-color: var(--hover-background-color, #f0f0f0); /* Optional: change on hover */
    }

    /* Adding styles for Toggle functionality */

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #2196F3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }

    /* Additional styles as needed */
    `;

  render() {
    return html`
      <a href="/app/profile">Profile</a>
      <a href="http://www.stimsonphoto.com" target="_blank">stimsonphoto.com</a>
      <label class="toggle-switch">
        <input type="checkbox" @change="${this.toggleDarkMode}">
        <span class="slider round"></span>
      </label>
    `;
  }
  toggleDarkMode(e) {
    const checked = e.target.checked;
    document.body.classList.toggle('light-mode', checked);
  }
}
