import { css, html, LitElement } from "lit";
import { customElement} from "lit/decorators.js";
import "./toggle-switch";
import "./preset-buttons";

@customElement("user-panel")
export class UserPanelElement extends LitElement {

    render() {
        return html`
            <div class="profile-icon"></div>
    `;
    }

    static styles = css`

    .profile-icon {     
        width: 60px; 
        height: 60px;
        border-radius: 50%;
        background-image: url('/images/profilePhoto.jpg');
        background-size: cover;
        border: 4px solid white; 
    }
    `
}