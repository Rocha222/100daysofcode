function crearTarjeta(pokemon) {
  var div = document.createElement('div');
  div.classList.add('tarjeta');
  var img = document.createElement('img');
  img.src = pokemon.imagen_pokemon;
  img.alt = pokemon.nombre;
  img.classList.add('imagen_pokemon');
  div.append(img);
  var h2 = document.createElement('h2');
  h2.innerText = pokemon.nombre;
  div.append(h2);
  var tipos = document.createElement('p');
  tipos.innerText = pokemon.tipo;
  div.append(tipos);
  var habilidades = document.createElement('p');
  habilidades.innerText = pokemon.habilidades;
  div.append(habilidades);
  document.querySelector('#contenedor').append(div);
}

var pokemones = [
  {
    nombre: 'Charmander',
    tipo: 'fuego',
    habilidades: 'llamarada',
    imagen_pokemon:
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif',
  },
  {
    nombre: 'Bulbasaur',
    tipo: 'planta',
    habilidades: 'latigo cepa',
    imagen_pokemon:
      'https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png',
  },
  {
    nombre: 'Squirtle',
    tipo: 'agua',
    habilidades: 'mojar',
    imagen_pokemon:
      'https://cosplayfu-website.s3.amazonaws.com/_Upload/b/30cm-Squirtle-Pokemon-Plush-Toy.jpg',
  },
  {
    nombre: 'Rayquaza',
    tipo: 'dragon',
    habilidades: 'rafaga delta',
    imagen_pokemon:
      'https://i.pinimg.com/736x/94/ee/b9/94eeb99713ceedc123744456fb410e49.jpg',
  },
];
for (var i = 0; i < pokemones.length; i++) {
  crearTarjeta(pokemones[i]);
}

var peticion = fetch('https://pokeapi.co/api/v2/pokemon/130');
console.log(peticion);
