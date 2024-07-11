// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/omdb';
import './movieDetailPage.css'; // Assurez-vous de créer le fichier CSS correspondant

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovieDetails = async () => {
      setError('');
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        setError("Une erreur s'est produite lors de la récupération des détails du film.");
      }
    };
    getMovieDetails();
  }, [id]);

  return (
    <div className='movie-detail'>
      {error && <p className='error'>{error}</p>}
      {movie ? (
        <div>
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Année :</strong> {movie.Year}</p>
          <p><strong>Genre :</strong> {movie.Genre}</p>
          <p><strong>Réalisateur :</strong> {movie.Director}</p>
          <p><strong>Acteurs :</strong> {movie.Actors}</p>
          <p><strong>Intrigue :</strong> {movie.Plot}</p>
        </div>
      ) : (
        <p>Chargement des détails du film...</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
