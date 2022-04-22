import { produce } from "immer";

const initialState = {
  isLoading: false,
  list: [],
  errorMessage: "",
};

const booksReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case "BOOKS_LOAD_START":
        draft.isLoading = true;
        draft.list = [];
        draft.errorMessage = null;
        break;
      case "BOOKS_LOAD_SUCCESS":
        draft.isLoading = false;
        draft.list = payload.books;
        break;
      case "BOOKS_LOAD_ERROR":
        draft.isLoading = false;
        draft.errorMessage = payload;
        break;
      default:
        return draft;
    }
  });

export default booksReducer;
