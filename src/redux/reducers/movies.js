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
      return {
        ...state,
        popular: action.payload,
        totalPagePopular: action.totalPage,
        currentPagePopular: action.page,
      };
    }
    case 'NOW_PLAYING': {
      return {
        ...state,
        nowPlaying: action.payload,
        totalPageNowPlaying: action.totalPage,
        currentPageNowPlaying: action.page,
      };
    }
    case 'SEARCH': {
      return {
        ...state,
        search: action.payload,
        totalPageSearch: action.totalPage,
        currentPageSeatotalPageSearch: action.page,
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
