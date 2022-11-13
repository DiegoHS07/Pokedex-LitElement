import { LitElement, html, css } from 'lit';

export class TextComponent extends LitElement {
    static get styles() {
      return css`
        p{
            font-family: 'Oswald', sans-serif;
            margin: 0.5rem;
            text-align: center;
            text-transform: capitalize;
        }
      `;
    }

    static get properties() {
        return {
            text: { type: String },
            sizeText: { type: String },
            weightBold: { type: Boolean }
        };
    }

    constructor(){
        super();
        this.sizeText = "1rem";
    }

    render() {
        return html`<p style="font-size:${this.sizeText}">${this.text}</p>`;
    }
}
customElements.define('text-component', TextComponent);
