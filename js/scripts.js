//iife
let pokemonReponsitory = (function() {

let pokemonList= [
  {
    name: 'Bulbasaur',
    height: .7,
    types: ['grass', 'poison']
  },
  {
    name: 'Charmander',
    height: .6,
    types: ['fire']
  },
  {
    name: 'Squirtle',
    height: .5,
    types: ['water']
  },
  {
    name: 'Pikachu',
    height: .4,
    types:[ 'electric'] },
  ];


  return {
  add: add,
  getAll: getAll
  };

})();

//create a for loop that iterates over each item in pokemonList

pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height >= 2) {
    document.write( '<p>' + pokemon.name + ' ' + '(Height: ' + pokemon.height + ')' + ' - Wow that\'s big!' + '</p>')
    }
    else document.write( '<p>' + pokemon.name + ' ' + '(Height: ' + + pokemon.height + ')' + '</p>')
    });


//Below is for loop for PokemonList array. Replaced with forEach loop.

/* for (let i=0; i<pokemonList.length; i++){
  if (pokemonList[i].height > .5)
  {
    document.write(pokemonList[i].name + " (" + "height " + pokemonList[i].height + ") " + "- Wow he is chonky <br />");
  }
  else
  {
    document.write(pokemonList[i].name + " (" + "height " + pokemonList[i].height + ") <br />");
  }
} */
