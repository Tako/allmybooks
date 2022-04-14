const initialState = {
  isLoading: false,
  books: null,
  errorMessage: ''
};


const booksReducer = (state = initialState, {type, payload}) => {

  switch(type) {
    case "BOOKS_LOAD_START":
    return {
      ...state,
      isLoading: true,
      books: null,
      errorMessage: null
    };
    case "BOOKS_LOAD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        books: payload
      };
    case "BOOKS_LOAD_ERROR":
      return {
        ...state,
        isLoading: false,
        errorMessage: payload
      };
      default:
        return state;
  }
}

export default booksReducer;
