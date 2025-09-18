export default class MovieController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.movies = [];
  }

  async init() {
    this.movies = await this.model.fetchMovies();
    this.view.renderMovies(this.movies);

    this.view.bindSearch((query) => this.handleSearch(query));
    this.view.bindGenreFilter((filter) => this.handleFilter(filter));
  }

  handleSearch(query) {
    const filtered = this.movies.filter((m) =>
      m.title.toLowerCase().includes(query)
    );
    this.view.renderMovies(filtered);
  }

  handleFilter({ genre, sort }) {
    let filtered = [...this.movies];

    if (genre && genre !== "all") {
      filtered = filtered.filter(
        (m) => m.details?.genre?.toLowerCase() === genre.toLowerCase()
      );
    }

    if (sort === "desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    }
    if (sort === "asc") {
      filtered.sort((a, b) => a.rating - b.rating);
    }

    this.view.renderMovies(filtered);
  }
}
