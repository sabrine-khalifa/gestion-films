import { FETCH_MOVIES_SUCCESS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIES_ERROR } from '../constants/actionTypes';

const initialState = {
  movies: [],
  movieDetails: {},
  error: '',
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, error: '' };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return { ...state, movieDetails: action.payload, error: '' };
    case FETCH_MOVIES_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
