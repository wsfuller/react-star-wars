const initialState = {
  films: [],
  film: {},
  fetching: true,
  error: false,
  errorMessage: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_FILMS': {
      return {
        ...state,
        fetching: true,
        films: [],
        error: false,
      };
    }
    case 'FETCH_CACHED_FILMS_SUCCESSFUL':
    case 'FETCH_FILMS_SUCCESSFUL': {
      return {
        ...state,
        fetching: false,
        films: action.payload,
      };
    }
    case 'FETCH_FILMS_FAILED':
    case 'FETCH_FILM_FAILED': {
      return {
        ...state,
        fetching: false,
        error: true,
        errorMessage: String(action.payload),
      };
    }
    case 'FETCH_FILM': {
      return {
        ...state,
        fetching: true,
        film: {},
        error: false,
      };
    }
    case 'FETCH_FILM_SUCCESSFUL': {
      return {
        ...state,
        fetching: false,
        film: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
