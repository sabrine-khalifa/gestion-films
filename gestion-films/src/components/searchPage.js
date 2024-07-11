// src/components/SearchPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './searchPage.css'; // Assurez-vous de créer le fichier CSS correspondant

const SearchPage = () => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = '77f33437';

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
      );
      console.log("Réponse de l'API:", response.data); // Ajoutez cette ligne pour déboguer
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error); // Ajoutez cette ligne pour déboguer
      setError(
        "Une erreur s'est produite lors de la récupération des données."
      );
    }
  };

  return (
    <div className='search-page'>
      <h1>Recherche de Films</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Entrez le titre du film...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type='submit'>Rechercher</button>
      </form>
      {error && <p className='error'>{error}</p>}
      <div className='movie-list'>
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className='movie-card'>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <Link to={`/movie/${movie.imdbID}`}>Voir Détails</Link>
            </div>
          ))
        ) : (
          <p>Aucun film trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

