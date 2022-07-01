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

  //create a for loop that iterates over each item in pokemonList
  pokemonList.forEach(function(name){
      document.write(name.name + " ");
  });

})();

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
