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
        if (!this.profile) {
            return html`<div>Loading...</div>`;
        }

        return html`
            <link rel="stylesheet" href="/styles/reset.css"/>
            <link rel="stylesheet" href="/styles/tokens.css"/>
            <link rel="stylesheet" href="/styles/page.css"/>
            
            <section class="profile-header">
                <div class="back-button-container">
                    <a href="/app/index.html" class="back-button">&#x2190; Back</a>
                </div>
                <img src="/images/profilePhoto.jpg" alt="Profile Photo" class="profile-image">
                <div class="profile-info">
                    <h1 class="user-name">${this.profile.name}</h1>
                    <h2 class="bio">${this.profile.bio ? this.profile.bio : 'Bio: Write something cool here'}</h2>
                </div>
            </section>

            <div class="profile-sections">
                <section class="profile-section favorite-destinations">
                    <h2 class="section-title">Favorite Destination</h2>
                    <h2>${this.profile.favoriteDestination?.name}</h2>
                </section>
                <section class="profile-section favorite-image">
                    <h2 class="section-title">Favorite Image</h2>
                    <img src="${this.profile.favoriteDestination?.imageUrl}" alt="${this.profile.favoriteDestination?.name}">
                </section>
            </div>
        `;
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

    static styles = css`

        .back-button-container {
            position: absolute;
            top: 120px;
            left: 20px;
            z-index: 100; /* Ensure it's above other content */
        }

        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            margin-top: 20px;
            border-radius: 10px;
        }
    `;
}

// in src/user-profile.ts, after the previous component
@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
    render() {
        // Check if this.profile is undefined, if so, return loading or nothing
        if (!this.profile) {
            return html`<div>Loading...</div>`;
        }

        return html`
      <div class="edit-profile-container">
        <h2>Edit Profile</h2>
        <div class="edit-profile-form">
          <form @submit="${this._handleSubmit}">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${this.profile.name}">
            <br>
            <label for="bio">Bio:</label>
            <textarea id="bio" name="bio">${this.profile.bio ? this.profile.bio : ''}</textarea>
            <br>
            <label for="favoriteDestination">Favorite Destination:</label>
            <input type="text" id="favoriteDestination" name="favoriteDestination" value="${this.profile.favoriteDestination?.name}">
            <br>
            <label for="favoriteImageUrl">Favorite Image URL:</label>
            <input type="text" id="favoriteImageUrl" name="favoriteImageUrl" value="${this.profile.favoriteDestination?.imageUrl}">
            <br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    `;
    }


    // in class UserProfileEditElement

    _handleSubmit(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const target = ev.target as HTMLFormElement;
        const formdata = new FormData(target);
        const entries = Array.from(formdata.entries())
            .map(([k, v]) => (v === "" ? [k] : [k, v]))
            .map(([k, v]) =>
                k === "airports"
                    ? [k, (v as string).split(",").map((s) => s.trim())]
                    : [k, v]
            );
        const json = Object.fromEntries(entries);

        this._putData(json);
    }


    _putData(json: Profile) {
        fetch(serverPath(this.path), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(json)
        })
            .then((response) => {
                if (response.status === 200) return response.json();
                else return null;
            })
            .then((json: unknown) => {
                if (json) this.profile = json as Profile;
            })
            .catch((err) =>
                console.log("Failed to PUT form data", err)
            );
    }
}