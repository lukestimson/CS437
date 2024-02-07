import { LitElement, html, css, customElement } from 'lit';

@customElement('user-panel')
class UserPanel extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      background: var(--panel-background-color, white);
      border-radius: 50%;
      width: 100px;
      height: 100px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
    .profile-text {
      margin-top: 5px;
      color: var(--text-color, black);
      font-size: 0.8rem;
    }
  `;

  render() {
    return html`
      <img src="/images/profilePhoto.jpg" alt="Profile">
      <div class="profile-text">Profile</div>
    `;
  }
}
