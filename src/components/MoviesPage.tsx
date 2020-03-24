import React, { useState, useEffect } from "react";

// API
import * as API from "../api";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

interface MoviesPageProps {
  categories: MovieCategory[];
}

const MoviesPage: React.FC<MoviesPageProps> = ({ categories }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { slug } = useParams();
  const currentCategory: MovieCategory | undefined = slug
    ? categories.find(category => category.slug === slug)
    : undefined;

  useEffect(() => {
    async function setMoviesAsync() {
      const m: Movie[] = await API.getMovies();
      m.sort((x, y) => (x.name > y.name ? 1 : -1));
      setMovies(m);
    }
    setMoviesAsync();
  }, []);

  const getMoviesFromCategory = (category: MovieCategory) => {
    return movies.filter(movie => {
      return movie.productCategory.find(cat => cat.categoryId === category.id);
    });
  };

  const getLastAddedMovies = (numberOfMovies: number) => {
    const m: Movie[] = Array.from(movies);
    m.sort((x, y) => (x.added < y.added ? 1 : -1));
    return m.slice(0, numberOfMovies);
  };

  return (
    <>
      <h2>{(currentCategory && currentCategory.name) || "Latest additions"}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
        {(currentCategory &&
          getMoviesFromCategory(currentCategory).map(movie => (
            <MovieCard key={movie.id} movie={movie} categories={categories} />
          ))) ||
          getLastAddedMovies(4).map(movie => (
            <MovieCard key={movie.id} movie={movie} categories={categories} />
          ))}
      </div>
    </>
  );
};

export default MoviesPage;
