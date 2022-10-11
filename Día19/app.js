function crearTarjeta() {
  var div = document.createElement('div');
  div.classList.add('tarjeta');
  var img = document.createElement('img');
  img.src =
    'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif';
  img.alt = 'Charmander';
  img.classList.add('imagen_pokemon');
  div.append(img);
  var h2 = document.createElement('h2');
  h2.innerText = 'Charmander';
  div.append(h2);
  var tipos = document.createElement('p');
  tipos.innerText = 'fuego';
  div.append(tipos);
  var habilidades = document.createElement('p');
  habilidades.innerText = 'llamarada';
  div.append(habilidades);
  document.querySelector('#contenedor').append(div);
}

crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
crearTarjeta();
