// src/user-profiles.ts
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
    @property()
    path: string = "";

    @state()
    profile?: Profile;

    render() {
        // fill this in later
        return html`...`;
    }

    // in class UserProfileElement
    _fetchData(path: string) {
        fetch(serverPath(path))
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            })
            .then((json: unknown) => {
                if (json) this.profile = json as Profile;
            });
    }

    // in class UserProfileElement
    connectedCallback() {
        if (this.path) {
            this._fetchData(this.path);
        }
        super.connectedCallback();
    }

    // in class UserProfileElement
    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        if (name === "path" && oldValue !== newValue && oldValue) {
            this._fetchData(newValue);
        }
        super.attributeChangedCallback(name, oldValue, newValue);
    }

    static styles = css`...`;
}