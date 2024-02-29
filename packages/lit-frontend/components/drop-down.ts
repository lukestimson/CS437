import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("drop-down")
export class DropDownElement extends LitElement {
    @property({ reflect: true, type: Boolean })
    open: boolean = false;

    @property()
    align: "left" | "right" = "left";

    render() {
        const menuStyle =
            this.align === "left"
                ? ""
                : "--position-left: auto; --position-right: 0;";

        return html`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open} />
      <label for="is-shown">
        <slot>Menu</slot>
      </label>
      <slot name="menu" style=${menuStyle}>
        <div>
            <a href="/app/profile">Profile</a>
            <a href="http://www.stimsonphoto.com" target="_blank">stimsonphoto.com</a>
            
            <label class="toggle-switch">
                <input type="checkbox" @change="${this.toggleDarkMode}">
                <span class="slider round"></span>
            </label>
        </div>
      </slot>
    `;
    }

    toggleDarkMode(e: { target: { checked: any; }; }) {
        const checked = e.target.checked;
        document.body.classList.toggle('light-mode', checked);
    }

    static styles = css`
    :host {
      --position-left: 0;
      --position-right: auto;

      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      //left: var(--position-left);
      //right: var(--position-right);
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */

    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
    }

        /* Styles from User-panel_old */ 
    
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
  `;

    _handleChange(ev: InputEvent) {
        const target = ev.target as HTMLInputElement;
        this._toggle(target.checked);
    }

    _toggle(open: boolean) {
        this.open = open;
        this._toggleClickAway(open);
    }

    _toggleClickAway(open: boolean) {
        const clickawayHandler = (ev: Event) => {
            if (!ev.composedPath().includes(this)) {
                this._toggle(false);
            } else {
                ev.stopPropagation();
            }
        };

        if (open) {
            document.addEventListener("click", clickawayHandler);
        } else {
            document.removeEventListener("click", clickawayHandler);
        }
    }
}