import {html, render} from 'https://unpkg.com/lit-html?module';
import AppConfigEntry from './AppConfigEntry.js';



class AppConfig extends HTMLElement { 
 
    constructor() {
        // always call super() first
        super(); 
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        console.log('constructed!');
    }

    async connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }

    adoptedCallback() {
        console.log('adopted!');
    }

    template() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
            <ul id="appconfigurations">
              ${this.configEntries.map((entry) => html`
                    <app-config-entry 
                        key=${entry.key}
                        value=${entry.value}
                        type=${entry.type}
                        @onRemove=${this._removeEntry}>    
                    </app-config-entry>
                  `
              )}
            </ul>
        `;
    }
}
//registering the component
customElements.define("app-config",AppConfig);  