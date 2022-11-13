import { LitElement, html, css } from 'lit';

export class TitleComponent extends LitElement {

    static get styles() {
        return css`
           h1{
                color: #B22222;
                text-transform: capitalize;
            }
        `;
    }

    static get properties() {
        return {
            textTitle: { type: String }, 
        };
    }

    render() {
        return html`<h1>${this.textTitle}</h1>`;
    }
}
customElements.define('title-component', TitleComponent);
