export default class MovieView {
  constructor() {
    this.movieList = document.getElementById("movieList");
    this.searchInput = document.getElementById("searchInput");
    this.genreButtons = document.getElementById("genreButtons");
  }

  renderMovies(movies) {
    this.movieList.innerHTML = movies
      .map(
        (movie) => `
      <div class="movie-card">
        <img src="${movie.image}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p>${movie.description}</p>
      </div>
    `
      )
      .join("");
  }

  bindSearch(handler) {
    this.searchInput.addEventListener("input", (e) => {
      handler(e.target.value.toLowerCase());
    });
  }

  bindGenreFilter(handler) {
    this.genreButtons.addEventListener("click", (e) => {
      const genre = e.target.dataset.genre;
      const sort = e.target.dataset.sort;
      if (genre || sort) handler({ genre, sort });
    });
  }
}
