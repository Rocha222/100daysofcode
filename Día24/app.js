var input = document.querySelector('#texto');
var tarjeta = document.querySelector('#tarjeta');

function buscar() {
  traerDatos(input.value);
}

function traerDatos(pokemon) {
  var peticion = fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon);
  peticion.then((pokemon) => {
    pokemon.json().then((data) => {
      crearTarjeta(data);
      console.log(data);
    });
  });
}

function crearTarjeta(pokemon) {
  tarjeta.innerHTML = '';
  var image = document.createElement('img');
  image.src = pokemon.sprites.front_default;
  tarjeta.append(image);
  var caracteristicas = document.createElement('div');
  crearElemento('h2', 'Peso: ', pokemon.weight, caracteristicas);
  crearElemento('h2', 'Alto: ', pokemon.height, caracteristicas);
  crearElemento('h3', 'Tipos: ', '', caracteristicas);
  for (var i = 0; i < pokemon.types.length; i++) {
    crearElemento('p', '', pokemon.types[i].type.name, caracteristicas);
  }
  crearElemento('h3', 'Habilidades: ', '', caracteristicas);
  for (var i = 0; i < pokemon.abilities.length; i++) {
    crearElemento('p', '', pokemon.abilities[i].ability.name, caracteristicas);
  }
  var status = document.createElement('h3');
  status.innerText = 'Status:';
  caracteristicas.append(status);
  var lista = document.createElement('ul');
  for (var i = 0; i < pokemon.stats.length; i++) {
    crearElemento(
      'li',
      pokemon.stats[i].stat.name + ': ',
      pokemon.stats[i].base_stat,
      lista
    );
  }
  caracteristicas.append(lista);
  tarjeta.append(caracteristicas);
}

function crearElemento(etiqueta, titulo, valorTitulo, contenedor) {
  var elemento = document.createElement(etiqueta);
  elemento.innerText = titulo + valorTitulo;
  contenedor.append(elemento);
}
