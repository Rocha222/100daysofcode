function crearTarjeta(pokemon) {
  var div = document.createElement('div');
  div.classList.add('tarjeta');
  div.style.backgroundColor = setearBackground(pokemon.types[0].type.name);
  var img = document.createElement('img');
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;
  img.classList.add('imagen_pokemon');
  div.append(img);
  var h2 = document.createElement('h2');
  h2.innerText = textoMayuscula(pokemon.name);
  div.append(h2);
  var h3 = document.createElement('h3');
  h3.innerText = 'Type(s)';
  div.append(h3);
  var tiposVarios = document.createElement('div');
  tiposVarios.classList.add('tipos');

  for (var i = 0; i < pokemon.types.length; i++) {
    var tipos = document.createElement('p');
    tipos.innerText = textoMayuscula(pokemon.types[i].type.name);
    tiposVarios.append(tipos);
  }
  div.append(tiposVarios);

  var habilidadesVarias = document.createElement('div');
  habilidadesVarias.classList.add('habilidades');

  var habilidades = document.createElement('h3');
  habilidades.innerText = 'Abilities';
  div.append(habilidades);
  for (var i = 0; i < pokemon.abilities.length; i++) {
    var habilidades = document.createElement('p');
    habilidades.classList.add('habilidad');
    habilidades.innerText = textoMayuscula(pokemon.abilities[i].ability.name);
    habilidadesVarias.append(habilidades);
  }
  div.append(habilidadesVarias);
  document.querySelector('#contenedor').append(div);
}

function textoMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

for (var i = 1; i < 152; i++) {
  var peticion = fetch('https://pokeapi.co/api/v2/pokemon/' + i);

  peticion.then((pokemon) => {
    pokemon.json().then((pokemon) => {
      console.log(pokemon);
      crearTarjeta(pokemon);
    });
  });
}

function setearBackground(tipo) {
  switch (tipo) {
    case 'normal':
      return '#b3a394';
      brake;
    case 'fire':
      return '#e76f51';
      brake;
    case 'water':
      return '#0077b6';
      break;
    case 'grass':
      return '#99d98c';
      break;
    case 'electric':
      return '#ffc300';
      break;
    case 'ice':
      return '#73d2de';
      break;
    case 'fighting':
      return '#9d0208';
      break;
    case 'poison':
      return '#7b2cbf';
      break;
    case 'ground':
      return '#de9e36';
      break;
    case 'flying':
      return '#c77dff';
      break;
    case 'psychic':
      return '#ff499e';
      break;
    case 'bug':
      return '#87986a';
      break;
    case 'rock':
      return '#cca43b';
      break;
    case 'ghost':
      return '#5b2a86';
      break;
    case 'dark':
      return '#582f0e';
      break;
    case 'dragon':
      return '#7209b7';
      break;
    case 'steel':
      return '#e5e5e5';
      break;
    case 'fairy':
      return '#fae0e4';
      break;

    default:
      return '#000000';
  }
}
