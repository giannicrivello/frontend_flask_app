
import React, { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./Movies";
import { MovieForm } from "./MovieForm";
import { Container } from "semantic-ui-react";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/movies").then(response =>
      response.json().then(data => {
        setMovies(data.movies);
      })
    );
  }, []);

  return (
    <Container style={{ marginTop: 40 }}>
        <h1>RATE YOUR FAVORTIE ACADEMY</h1>
      <MovieForm
        onNewMovie={movie =>
          setMovies(currentMovies => [movie, ...currentMovies])
        }
      />
      <Movies movies={movies} />
    </Container>
  );
}

