import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
      <h3>Choose a movie from the list above</h3>
        {/* adding the movies object as a prop to MovieShow */}
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
