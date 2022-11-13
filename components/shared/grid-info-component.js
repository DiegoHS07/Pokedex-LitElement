import { LitElement, html, css } from 'lit';
import "./text-component";

export class GridInfoComponent extends LitElement {
    static get styles() {
      return css`
        :host{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      `;
    }

    static get properties() {
        return {
            id: { type: String },
            types: { type: Array},
            stats: { type: Array},
        };
    }

    constructor(){
        super();
        this.types = [];
        this.stats = [];
    }

    render() {
        let stringTypes = "";
        this.types.map(({ type }) => stringTypes = stringTypes.concat(type.name, " "));
        return html`
            <text-component text="Id"></text-component>
            <text-component text="# ${this.id}"></text-component>
            <text-component text="Types"></text-component>
            <text-component text="${stringTypes}"></text-component>
            ${this.stats.map(
                stat => html`
                    <text-component text="${stat.stat.name}"></text-component>
                    <text-component text="${stat.base_stat}"></text-component>`
            )}
        `;
    }
}
customElements.define('grid-info-component', GridInfoComponent);
