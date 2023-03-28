import { Route, useRouteMatch } from "react-router-dom";
function Movies({ movies }) {
  const match = useRouteMatch();
  const url = match.url;
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <Route to="/"></Route>
    </div>
  );
}

export default Movies;
