import { LitElement, html, css } from 'lit';
import "./shared/title-component";
import "./container-pokedex"
import "./shared/text-component"

export class MainComponent extends LitElement {

    static get styles() {
      return css`
        main{
            border: 5px solid #B22222;
            border-radius: 15px;
            height: max-content;
            width: 95vw;
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
        }
      `;
    }

    static get properties() {
        return {
            nameProject: { type: String }, 
            creatorProject: { type: String }, 
            urlListPokemon: { type: String },
            numGeneration: { type: String },
        };
    }

    constructor(){
        super();
        this.nameProject = "Pokedex practica cells";
        this.creatorProject = "Creado por Diego Higuera";
        this.urlListPokemon = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151";
    }


    render() {
        return html`
        <main>
            <title-component textTitle="${this.nameProject}"></title-component>
            <container-pokedex url="${this.urlListPokemon}"></container-pokedex>
            <text-component text="${this.creatorProject}"></text-component>
        </main>`;
    }
}
customElements.define('main-component', MainComponent);
