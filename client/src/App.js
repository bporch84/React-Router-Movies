import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom"
// I will be using both Route to render the MovieList and Movie components, and I will be using switch so that I can render the right components at the right time.
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path="/movies/:id" component={Movie} />
        {/* I am rendering the Movie component at the path /movies/:id so that I can make it dynamic and show the right movie based on the id presented. */}
        <Route path="/" render={(props) => <MovieList movies={movieList} />} />
        {/* I am rendering the MovieList component and have passed it movieList as a prop.*/}
      </Switch>
    </div>
  );
}
