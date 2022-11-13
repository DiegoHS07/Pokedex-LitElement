import { LitElement, html, css } from 'lit';
import "./shared/text-component"
import "./shared/image-component"
import "./shared/grid-info-component"
import {colorsTypesPokemon} from "./styles/colors-pokemons"

export class CardPokemon extends LitElement {
    static get styles() {
      return [
        colorsTypesPokemon,
        css`
          .card-pokemon{
              width: 27rem;
              border-radius: 10px;
              box-shadow: 9px 8px 10px 0px;
              margin: 1.5rem;
              display: flex;
              flex-flow: column nowrap;
              align-content: center;
              align-items: center;
              background-color: white;
          }

          .card-pokemon:hover{
            filter: brightness(95%);
            cursor: pointer;
          }
        `];
    }

    static get properties() {
      return {
        name: { type: String },
        url: { type: String },
        pokemon: { type: Array },
        nameClass: { type: String },
        urlPokemon: { type: String },
        typesPokemon: { type: Array },
        statsPokemon: { type: Array },
      };
    }

    constructor(){
      super();
      this.pokemon = [];
      this.typesPokemon = [];
      this.statsPokemon = [];
    }

    async firstUpdated(){
      this.pokemon = await this.dataPokemon();
      this.urlPokemon = this.pokemon.sprites.front_default;
      this.typesPokemon = this.pokemon.types;
      this.nameClass = this.pokemon.types[0].type.name;
      this.statsPokemon = this.pokemon.stats;
    }

    async dataPokemon(){
        try {
          const response = await fetch(this.url);
          const data = await response.json();
          return data;
        }catch (error) {
          console.log(error)
        }
    }

    render() {
        return html`
            <div class="card-pokemon ${this.nameClass}">
              <text-component text="${this.pokemon.name}" sizeText="2.5rem"></text-component>
              <image-component urlImage="${this.urlPokemon}" nameClass="${this.nameClass}"></image-component>
              <grid-info-component id="${this.pokemon.id}" 
                .types="${this.typesPokemon}" 
                .stats="${this.statsPokemon}"></grid-info-component>
            </div>
        `;
    }
}
customElements.define('card-pokemon', CardPokemon);
