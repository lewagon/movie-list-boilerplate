const movieContainer = document.querySelector('#results');

fetch("https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      // First, we build our HTML element
      const movieCard = `<div class='col-3'>
        <div class="card">
          <img src="${result.Poster}" class="card-img-top" alt="${result.Title} poster">
          <div class="card-body">
            <h6 class="card-title">${result.Title}</h6>
            <p class="card-text">${result.Year}</p>
            <a href="https://www.imdb.com/title/${result.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
          </div>
        </div>
    </div>`;
    movieContainer.insertAdjacentHTML('beforeend', movieCard); // Then, we insert it into the DOM
    })
  })
