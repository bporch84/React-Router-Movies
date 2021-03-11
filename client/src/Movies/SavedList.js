import React from 'react';
import { useHistory} from "react-router-dom"
// I used useHistory to push home onto the history stack.

export default function SavedList(props) {

  let history = useHistory();

  function returnHome() {
    history.push("/")
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={returnHome} className="home-button">Home</div>
    </div>
  );
}
