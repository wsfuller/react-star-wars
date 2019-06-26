import axios from 'axios';
import { checkCache, setCache } from './helpers/cache';

const config = require('./');

const { API_BASE_URL, APP_CACHE_NAME, LONG_CACHE_EXPIRY } = config;
const appCacheObj = JSON.parse(localStorage.getItem(APP_CACHE_NAME));

export const fetchFilms = () => {
  const actionDispatch = async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_FILMS' });

      if (checkCache(APP_CACHE_NAME, 'films')) {
        dispatch({
          type: 'FETCH_CACHED_FILMS_SUCCESSFUL',
          payload: appCacheObj.films.results,
        });
      } else {
        const response = await axios.get(`${API_BASE_URL}films`);
        const { results } = await response.data;

        dispatch(
          {
            type: 'FETCH_FILMS_SUCCESSFUL',
            payload: results,
          },
          setCache(APP_CACHE_NAME, appCacheObj, 'films', results, LONG_CACHE_EXPIRY),
        );
      }
    } catch (err) {
      dispatch({
        type: 'FETCH_FILMS_FAILED',
        payload: err,
      });
    }
  };

  return actionDispatch;
};

export const fetchFilm = (id) => {
  const actionDispatch = async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_FILM' });

      const response = await axios.get(`${API_BASE_URL}films/${id}/`);
      const results = await response.data;

      dispatch({
        type: 'FETCH_FILM_SUCCESSFUL',
        payload: results,
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_FILM_FAILED',
        payload: err,
      });
    }
  };

  return actionDispatch;
};
