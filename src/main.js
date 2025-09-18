import MovieModel from "./model/MovieModel.js";
import MovieView from "./view/MovieView.js";
import MovieController from "./controller/MovieController.js";

const app = new MovieController(new MovieModel(), new MovieView());
app.init();
