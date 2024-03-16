import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('right-side-content')
export class RightSideContent extends LitElement {
    static styles = css`
        :host {
            width: calc(100% - 50px); /* Set width to half of the page width minus any margins */
            float: left; /* Float the container to the left */
            margin-left: 20px; /* Add margin between the cards */
            background-color: var(--header-bg-color); /* Background color */
            color: var(--text-color); /* Text color */
            border-radius: 20px; /* Border radius */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
            padding: 20px; /* Padding */
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;

        }
        
        :host(:hover) {
            transform: translateY(-5px);
        }

        img {
            width: 300px;
            height: 200px;
            object-fit: cover;
            margin-top: 20px;
            border-radius: 10px;
        }

        .image-gallery {
            display: flex;
            flex-wrap: wrap;
        }

        .image-gallery img {
            flex: 0 0 calc(33.33% - 10px); /* Each image takes up 1/3 of the container width minus margins */
            margin: 5px; /* Add margin between images */
            object-fit: cover; /* Ensure images maintain aspect ratio */
            border-radius: 8px; /* Add rounded corners */
        }
    `;

    render() {
        return html`
            <div class="right-side-container">
                <!-- Content goes here -->
                <h2>Image Library</h2>
                <a href="/app/gallery/gallery.html" class="image-gallery-link">
                    <div class="image-gallery">
                        <!-- Example images -->
                        <img src="/images/big-sur-california.jpg" alt="Example 1">
                        <img src="/images/Grindelwald.jpg" alt="Example 2">
                        <img src="/images/lisbon-portugal.jpg" alt="Example 3">
                        <img src="/images/madeira-portugal.jpeg" alt="Example 4">
                        <img src="/images/Playahermosa-costaRica.jpg" alt="Example 5">
                        <img src="/images/costa-rica.jpg" alt="Example 6">
                    </div>
                </a>    
            </div>
        `;
    }
}
