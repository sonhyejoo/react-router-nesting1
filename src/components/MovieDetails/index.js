import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  let { movieId } = useParams();
  const movieChoice = movies.find((ele) => ele.id === parseInt(movieId));
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
