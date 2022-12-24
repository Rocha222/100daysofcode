const contenedor = document.querySelector('#contenedor');

async function traerBroma() {
  const peticion = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await peticion.json();
  mostrarChiste(data);
}

function mostrarChiste(p) {
  const parrafo = document.createElement('p');
  parrafo.innerText = p.value;
  contenedor.append(parrafo);
}

for (let i = 0; i < 1; i++) {
  traerBroma();
}
