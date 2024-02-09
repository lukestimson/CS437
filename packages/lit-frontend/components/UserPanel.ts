import { LitElement, html, css } from 'lit';
import { customElement } from "lit/decorators.js";


@customElement('user-panel')
class UserPanel extends LitElement {
  static styles = css`
    :host {
      display: block; /* Adjusted for dropdown */
      padding: 10px;
      background: var(--panel-background-color, white);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: auto; /* Adjusted for dropdown */
      min-width: 200px; /* Ensure it's not too narrow */
    }
    img {
      border-radius: 50%; /* Keep the profile image circular */
      width: 40px; /* Smaller size for dropdown */
      height: 40px; /* Smaller size for dropdown */
      object-fit: cover;
      margin-bottom: 10px; /* Space between image and text */
    }
    .profile-text {
      text-align: center; /* Center the text below the image */
      color: var(--text-color, black);
      font-size: 0.9rem; /* Slightly larger for readability */
    }
  `;

  render() {
    return html`
      <img src="/images/profilePhoto.jpg" alt="Profile">
      <div class="profile-text">Profile</div>
    `;
  }
}
