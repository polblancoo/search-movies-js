document.getElementById('searchButton').addEventListener('click', searchMovies);
let api_key = 'ea7fcfd853ee2e7bd760fc99d37cd768'
//poner api de themoviedb.org , crear cuenta para 
//acceder a API
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImb = 'https://image.tmdb.org/t/p/w200'

function searchMovies(){

    let searchInput = document.getElementById('searchInput').value
     
     console.log (`${urlBase}?query=${searchInput}?api_key=${api_key}`)
     const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdmY2ZkODUzZWUyZTdiZDc2MGZjOTlkMzdjZDc2OCIsInN1YiI6IjY1NTdkNzFlNTM4NjZlMDBhYmFjNWU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.75MxQZQMIym2NfPtHPtTZON7qUmcojBe2hqKiVM8evA'
        }
      }; 
    fetch (`${urlBase}?api_Key=${api_key}&query=${searchInput}`, options)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML='';

    if (movies.length === 0){
        resultContainer.innerHTML= '<p> No se encontraron resultados para su busqueda </p>'
        return
    }

    movies.forEach(movie => {

        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue :' + movie.releasse_date;
        
        let overview = document.createElement('p');
        overview.textContent= movie.overview;

        let posterPath = urlImb + movie.poster_path
        let poster = document.createElement('img');
        poster.src = posterPath
        
        
        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(overview);
        movieDiv.appendChild(releaseDate);

        resultContainer.appendChild(movieDiv)
    });


}