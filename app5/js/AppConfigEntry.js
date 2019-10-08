class AppConfigEntry extends HTMLElement { 

    
  
    constructor() {
        // always call super() first
        super(); 
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

    /**
     * convention only the value of an entry can be changed 
     */
    static get observedAttributes() {
        return ['value'];
    }


}
//registering the component
customElements.define("app-config-entry",AppConfigEntry);  