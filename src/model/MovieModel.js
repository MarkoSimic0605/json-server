export default class MovieModel {
  constructor() {
    this.baseURL = "http://localhost:3000/movies";
  }

  async fetchMovies() {
    const res = await fetch(this.baseURL);
    if (!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
  }
}
