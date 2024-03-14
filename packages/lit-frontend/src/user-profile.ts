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
                    <img src="${this.profile.favoriteDestination?.imageUrl}" alt="${this.profile.favoriteDestination?.name}">
                </section>
                <section class="profile-section favorite-image">
                    <h2 class="section-title">Favorite Image</h2>
                    <img src="${this.profile.favoriteDestination?.imageUrl}" alt="Favorite Image">
                </section>
            </div>
        `;
    }

    //            in render(): <button @click=${this._redirectToEdit} class="edit-profile-button">Edit Profile</button>
    // _redirectToEdit() {
    //     window.location.href = "/user-profile.edit"; // Assuming this is the correct URL
    // }

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

    //     .back-button {
    //         display: inline-block;
    //         background-color: var(--header-bg-color); /* Use your header background color */
    //         color: var(--text-color); /* Use your text color */
    //         text-decoration: none; /* Removes underline from link */
    //         padding: 10px 15px; /* Adjust padding as needed */
    //         border-radius: 5px; /* Optional: rounds the corners */
    //         font-size: 16px; /* Adjust font size as needed */
    //         box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Optional: adds a shadow for depth */
    //         transition: background-color 0.3s; /* Smooth background color transition on hover */
    //     }
    //
    //     .back-button:hover {
    //         background-color: #555; /* Darker background on hover */
    //     }
    //
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



//     static editStyles: CSSResult = css`
//     /* Your additional styles for editing profile */
// `;
//
//     static styles: CSSResult[] = [...UserProfileElement.styles, UserProfileEditElement.editStyles];

    // in class UserProfileEditElement

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


    // _handleSubmit(ev: Event) {
    //     ev.preventDefault(); // prevent browser from submitting form data itself
    //
    //     const target = ev.target as HTMLFormElement;
    //     const formData = new FormData(target);
    //
    //     // Extract values from the form data
    //     const name = formData.get("name") as string ?? this.profile?.name ?? '';
    //     const userid = formData.get("userid") as string ?? this.profile?.userid ?? '';
    //     const bio = formData.get("bio") as string ?? this.profile?.bio ?? '';
    //     const favoriteDestination = formData.get("favoriteDestination") as string ?? this.profile?.favoriteDestination?.name ?? '';
    //     const favoriteImageUrl = formData.get("favoriteImageUrl") as string ?? this.profile?.favoriteDestination?.imageUrl ?? '';
    //
    //     // Prepare the JSON object with updated values
    //     const updatedProfile: Profile = {
    //         name: name,
    //         userid: userid,
    //         bio: bio,
    //         favoriteDestination: {
    //             name: favoriteDestination,
    //             imageUrl: favoriteImageUrl
    //         }
    //     };
    //
    //     // Call _putData with the updated profile
    //     this._putData(updatedProfile);
    // }


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