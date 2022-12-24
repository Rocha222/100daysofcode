const contenedor = document.querySelector('#contenedor');

async function traerDatos() {
  const peticion = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await peticion.json();
  mostrarImagen(data);
}

function mostrarImagen(imagen) {
  const img = document.createElement('img');
  img.src = imagen.message;
  contenedor.append(img);
}

for (let i = 0; i < 5; i++) {
  traerDatos();
}
