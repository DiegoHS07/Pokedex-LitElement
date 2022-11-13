import { LitElement, html, css } from 'lit';
import {colorsTypesPokemon} from "../styles/colors-pokemons.js"

export class ImageComponent extends LitElement {

    static get styles() {
      return [
            colorsTypesPokemon,
            css`
                img{
                    height: 15rem;
                    width: 15rem;
                    margin: 0.5rem auto;
                    border-radius: 50%;
                    box-shadow: 3px 4px 7px 0px;
                }
            `,
        ];
    }

    static get properties() {
        return {
            urlImage: { type: String },
            nameClass: { type: String },
        };
    }

    render() {
        return html`<img src="${this.urlImage}" class="${this.nameClass}">`;
    }
}
customElements.define('image-component', ImageComponent);
