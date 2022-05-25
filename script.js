import pokemonArray from "./data/pokemon.js";

let customSearch = ""

const cardContainer = document.querySelector(".card-container");
customSearch = document.querySelector("#custom-search");
const preFixList = document.querySelector("#prefix-search")

console.log(preFixList);


const insertInfo = (givenArr) => {
    let cardInfo = ``
    let allCardInfo = []
    givenArr.forEach(object => {
        cardInfo = `<main class="card-container">
    <div id="${object.id}" class="card">
      <img src="${object.sprite}" class="card__image" alt="">
      <div class="card__content">
        <h2 class="card__heading">${object.name}</h2>
        <p class="card__text">${object.types}</p>
      </div>
    </div>
  </main>`
        return allCardInfo.push(cardInfo);
    });
    return allCardInfo
}

const PokemonCardInfo = insertInfo(pokemonArray);

const makeHTML = (arrayWithInfo, htmlElement) => {
    arrayWithInfo.forEach(card => {
        htmlElement.innerHTML += card
    })
}
const allCards = makeHTML(PokemonCardInfo, cardContainer)


const pokemonCloneArr = [...pokemonArray]

const usePreFixList = () => {
    let selectedOption = preFixList.options[preFixList.selectedIndex].value;

    if (selectedOption === "alphabetical") {
        const alphabeticalPokemon = pokemonCloneArr.sort((a, b) => a.name.localeCompare(b.name))
        console.log(alphabeticalPokemon);
    } 
     
}

preFixList.addEventListener("change", usePreFixList);

