import { LitElement, html, css } from 'lit';
import "./card-pokemon";

export class ContainerPokedex extends LitElement {
    static get styles() {
      return css`
        .container-pokedex{
            margin: 0 5rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }      
      `;
    }

    static get properties() {
        return {
            url: {type: String},
            listPokemon: { type: Array },
        };
    }

    constructor(){
        super();
        this.listPokemon = [];
    }

    async firstUpdated(){
        const responseApi = await this.allPokemon();
        this.listPokemon = responseApi.results;
    }

    async allPokemon(){
        try {
            const response = await fetch(this.url);
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return html`
            <main class="container-pokedex">
                ${this.listPokemon.map(
                    ({ name, url }) => html`<card-pokemon name="${name}" url="${url}"></card-pokemon>`
                )}
            </main>`;
    }
}
customElements.define('container-pokedex', ContainerPokedex);
