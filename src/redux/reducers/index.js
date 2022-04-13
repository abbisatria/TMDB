import {combineReducers} from 'redux';

import movieReducer from './movies';

const reducer = combineReducers({
  movie: movieReducer,
});

export default reducer;
