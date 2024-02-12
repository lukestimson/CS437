import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('destination-card')
class DestinationCard extends LitElement {
    static styles = css`
        :host {
            display: block;
            margin-bottom: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            background-color: var(--background-color);
            color: var(--text-color);
        }
        :host(:hover) {
            transform: translateY(-5px);
        }
        .card-header {
            padding: 20px;
            background-color: var(--header-bg-color);
            color: var(--header-text-color);
        }
        .card-body {
            padding: 20px;
        }
        h2 {
            margin: 0;
        }
        .card-info {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        .icon {
            fill: var(--text-color);
            margin-right: 10px;
        }
        img {
            width: 100%;
            height: auto;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
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
      <img src="${this.imageUrl}" alt="${this.title}">
      <div class="card-header">
        <h2>${this.title}</h2>
      </div>
      <div class="card-body">
        <div class="card-info">
          <svg class="icon"><use href="/icons/money.svg"></use></svg>
          <span>${this.cost}</span>
        </div>
        <div class="card-info">
          <svg class="icon"><use href="/icons/destination.svg"></use></svg>
          <span>${this.type}</span>
        </div>
        <div class="card-info">
          <svg class="icon"><use href="/icons/season.svg"></use></svg>
          <span>${this.season}</span>
        </div>
        <div class="card-info">
          <svg class="icon"><use href="/icons/activities.svg"></use></svg>
          <span>${this.activities}</span>
        </div>
      </div>
    `;
    }
}
