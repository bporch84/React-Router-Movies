import React from 'react';
import { useHistory } from "react-router-dom"
// I will be using useHistory to push the ids onto the history stack.

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  let history = useHistory();

  function historyPush() {
    history.push(`/movies/${props.movie.id}`)
  }

  return (
    <div onClick={historyPush} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
   
  );
}
