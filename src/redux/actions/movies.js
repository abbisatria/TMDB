import http from '../../helpers/http';
import {API_KEY} from '@env';

export const popular = page => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const response = await http().get(
        `movie/popular?api_key=${API_KEY}&language=en-US&page=${page || 1}`,
      );
      dispatch({
        type: 'POPULAR',
        payload: response.data.results,
        page: response.data.page,
        totalPage: response.data.total_pages,
      });
    } catch (err) {
      const {errors} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: errors,
      });
    }
  };
};

export const nowPlaying = page => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const response = await http().get(
        `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page || 1}`,
      );
      dispatch({
        type: 'NOW_PLAYING',
        payload: response.data.results,
        page: response.data.page,
        totalPage: response.data.total_pages,
      });
    } catch (err) {
      const {errors} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: errors,
      });
    }
  };
};

export const detailMovie = id => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const response = await http().get(
        `movie/${id}?api_key=${API_KEY}&language=en-US`,
      );
      dispatch({
        type: 'DETAIL',
        payload: response.data,
      });
    } catch (err) {
      const {errors} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: errors,
      });
    }
  };
};

export const video = id => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const response = await http().get(
        `movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
      );
      dispatch({
        type: 'VIDEO',
        payload: response.data.results[0],
      });
    } catch (err) {
      const {errors} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: errors,
      });
    }
  };
};

export const search = (movie, page) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: '',
      });
      const response = await http().get(
        `search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=${
          page || 1
        }&include_adult=false`,
      );
      dispatch({
        type: 'SEARCH',
        payload: response.data.results,
        page: response.data.page,
        totalPage: response.data.total_pages,
        keyword: movie,
      });
    } catch (err) {
      const {errors} = err.response.data;
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: errors,
      });
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      });
    }
  };
};

export const loading = value => ({
  type: 'SET_LOADING',
  payload: value,
});
