const initialState = {
  popular: [],
  totalPagePopular: null,
  currentPagePopular: null,
  nowPlaying: [],
  totalPageNowPlaying: null,
  currentPageNowPlaying: null,
  search: [],
  totalPageSearch: null,
  currentPageSearch: null,
  detail: {},
  video: {},
  keyword: '',
  errorMsg: '',
  loading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POPULAR': {
      const oldData = state.popular;
      const newData = [...oldData, ...action.payload];
      return {
        ...state,
        popular: newData,
        totalPagePopular: action.totalPage,
        currentPagePopular: action.page,
      };
    }
    case 'NOW_PLAYING': {
      const oldData = state.nowPlaying;
      const newData = [...oldData, ...action.payload];
      return {
        ...state,
        nowPlaying: newData,
        totalPageNowPlaying: action.totalPage,
        currentPageNowPlaying: action.page,
      };
    }
    case 'SEARCH': {
      const oldData = state.search;
      const newData = [...oldData, ...action.payload];
      return {
        ...state,
        search: action.page === 1 ? action.payload : newData,
        totalPageSearch: action.totalPage,
        currentPageSearch: action.page,
        keyword: action.keyword,
      };
    }
    case 'DETAIL': {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case 'VIDEO': {
      return {
        ...state,
        video: action.payload,
      };
    }
    case 'SET_MOVIE_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default movieReducer;
