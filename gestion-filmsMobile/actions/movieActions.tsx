import { Dispatch } from 'redux';
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIES_ERROR } from '../constants/actionTypes';

const API_KEY = '77f33437';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = (title: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
    const data = await response.json();
    if (data.Response === 'True') {
      dispatch({ type: FETCH_MOVIES_SUCCESS, payload: data.Search });
    } else {
      dispatch({ type: FETCH_MOVIES_ERROR, payload: data.Error });
    }
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_ERROR, payload: "Une erreur s'est produite lors de la récupération des données." });
  }
};

export const fetchMovieDetails = (id: string) => async (dispatch: Dispatch) => {
  try {
    
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_ERROR, payload: "Une erreur s'est produite lors de la récupération des données." });
  }
};
