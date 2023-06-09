import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails";
function Movies({ movies }) {
  const match = useRouteMatch();
  const url = match.url;
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav className="comp purple">
        <ul>
          {movies.map((el) => {
            return (
              <li>
                <NavLink to={`${url}/${el.id}`}>{el.title} </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Switch>
        <Route path={`${url}/:movieId`}>
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
