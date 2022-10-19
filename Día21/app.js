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
  h2.innerText = pokemon.name;
  div.append(h2);
  var tipos = document.createElement('p');
  tipos.innerText = pokemon.types[0].type.name;
  div.append(tipos);
  var habilidades = document.createElement('p');
  habilidades.innerText = pokemon.abilities[0].ability.name;
  div.append(habilidades);
  document.querySelector('#contenedor').append(div);
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
