// pokemonType = pokemonObject.types[0].type.name
// <a href="https://www.vecteezy.com/free-vector/pokemon-type">Pokemon Type Vectors by Vecteezy</a>
// orangereebok

const pokemon = document.getElementById('pokemon');
const pokemonNumber = document.getElementById('pokemon-number');
const pokemonName = document.getElementById('pokemon-name');
const pokemonTypeTxt = document.getElementById('pokemon-type-txt');
const pokemonTypeImg = document.getElementById('pokemon-type-img');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const pokemonBackground = document.querySelector('.body-design');


const button = document.getElementById('randomizer');

const getPokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const pokemonObject = await response.json();
    const pokemonImage = pokemonObject.sprites.other.dream_world.front_default;
    const pokemonStats = pokemonObject.stats;
    const pokemonType = pokemonObject.types[0].type.name;

    hp.innerHTML = pokemonStats[0].base_stat;
    attack.innerHTML = pokemonStats[1].base_stat;
    defense.innerHTML = pokemonStats[2].base_stat;
    specialAttack.innerHTML = pokemonStats[3].base_stat;
    specialDefense.innerHTML = pokemonStats[4].base_stat;
    speed.innerHTML = pokemonStats[5].base_stat;
    pokemon.src = pokemonImage;
    pokemon.alt = pokemonObject.name;
    pokemonName.innerHTML = capitalizeFirstLetter(pokemonObject.name);
    pokemonNumber.innerHTML = `#${pokemonObject.id}`;
    pokemonTypeImg.src = `img/types/${pokemonType}.png`;
    pokemonTypeImg.alt = `A symbol for a ${pokemonType} pokemon.`;
    pokemonTypeTxt.innerHTML = capitalizeFirstLetter(pokemonType);
    pokemonBackground.style.background = `var(--${pokemonType})`;
};

getPokemon();

randomizer.addEventListener('click', () => getPokemon());

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};