const movieContainer = document.querySelector('#results');
const template = document.querySelector("#movieCardTemplate");

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
.then(response => response.json())
.then((data) => {
    data.Search.forEach((result) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector("img").src = result.Poster
      clone.querySelector("h6").textContent = result.Title
      clone.querySelector("p").textContent = result.Year
      clone.querySelector("a").href = `https://www.imdb.com/title/${result.imdbID}`
      movieContainer.appendChild(clone);
    });
  })
