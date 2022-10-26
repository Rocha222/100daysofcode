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
  var nombre = document.createElement('p');
  nombre.innerText = pokemon.name;
  tarjeta.append(nombre);
}
