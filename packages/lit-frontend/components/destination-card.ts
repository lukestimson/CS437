import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';


@customElement('destination-card')
export class DestinationCard extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin-bottom: 25px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            background-color: var(--header-bg-color);
            color: var(--text-color);
            width: calc(100% - 20px); /* Set width to half of the page width minus any margins */

        }
        
        
        :host(:hover) {
            transform: translateY(-5px);
        }

        /* Link Text Styling */
        a {
            color: var(--link-color); /* Dodger blue color for links */
            text-decoration: none; /* Optional: removes underline from links */
        }
        a:hover {
            text-decoration: var(--link-hover-decoration); /* Optional: adds underline on hover for links */
        }
        
        h2 {
            font-size: 24px;
            color: var(--text-color);
            margin-bottom: 10px;
        }
   
        .icon {
            fill: var(--text-color);
            margin-right: 10px;
        }
        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            margin-top: 20px;
            border-radius: 10px;
        }

        .destination {
            display: flex;
            margin-bottom: 10px;
            margin-left: 20px;
            align-items: left;
        }

        //New style (reference)
        .destination-card {
            width: calc(50% - 20px); /* Set width to half of the page width minus any margins */
            float: left; /* Float the container to the left */
            margin-right: 20px; /* Add margin between cards */
            border-radius: 20px; /* Border radius */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
            background-color: var(--header-bg-color); /* Background color */
            color: var(--text-color); /* Text color */
            overflow: hidden; /* Hide overflow content */
        }

        .info {
            margin-left: 20px;
            margin-right: 25px;
        }
        .icon {
            height: 2em; /* Adjust size to match text */
            width: 3em;
            fill: var(--text-color); /* Updates icon fill to use text color token */
            vertical-align: middle; /* Aligns the icon with the text */
        }
        
    `;

    @property({ type: String }) title = '';
    @property({ type: String }) cost = '';
    @property({ type: String }) type = '';
    @property({ type: String }) season = '';
    @property({ type: String }) activities = '';
    @property({ type: String }) imageUrl = '';

    render() {
        return html`
            <div class="destination">
                <div class="info">
                    <h2>${this.title}</h2>
                    
                    <p><svg class="icon"><use href="/icons/destinationinfo.svg#icon3:money"></use></svg> Cost of 1 week Visit:
                      <span>${this.cost}</span></p>
                    <p><svg class="icon"><use href="/icons/destinationinfo.svg#icon2:location"></use></svg> Type of Destination:
                      <span>${this.type}</span></p>
                    <p><svg class="icon"><use href="/icons/destinationinfo.svg#icon4:time"></use></svg> Peak and Low Season:
                      <span>${this.season}</span></p>
                    <p><svg class="icon"><use href="/icons/destinationinfo.svg#icon1:activities"></use></svg> Activities:
                      <span>${this.activities}</span></p>
                    
                </div>
                  <img src="${this.imageUrl}" alt="${this.title}">
            </div>

        `;
    }
}
