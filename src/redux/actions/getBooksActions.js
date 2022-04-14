import { urlApi } from '../../constants';
import axios from "axios";

export const booksLoadStart = () => ({
  type: "BOOKS_LOAD_START"
})

export const booksLoadSuccess = (books: any) => ({
  type: "BOOKS_LOAD_SUCCESS",
  payload: books
})

export const booksLoadError = (errorMessage: string) => ({
  type: "BOOKS_LOAD_ERROR",
  payload: errorMessage
})

export const loadBooksAsync = () => (dispatch) => {
  dispatch(booksLoadStart())
  axios.get(`${urlApi}`)
    .then((books) => {
      dispatch(booksLoadSuccess(books.data));
    })
    .catch(() => {
      dispatch(booksLoadError('Erreur lors du chargement des livres'));
    });
}
