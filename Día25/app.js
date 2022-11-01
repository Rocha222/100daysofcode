const apiKey = '7526982420acc3f581cbf8ab219d3094';
const endpoint =
  'https://api.themoviedb.org/3/search/movie?api_key=' +
  apiKey +
  '&query=digimon';
const obtenerPelicula = () => {
  const peticion = fetch(endpoint);
  peticion.then((pelicula) => {
    pelicula.json().then((data) => {
      console.log(data);
    });
  });
};
obtenerPelicula();
