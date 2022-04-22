import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Components/Card/Card";
import { ContainerBooks } from "../style/components/ContainerBooks";
import { HeaderBooks } from "../style/components/HeaderBooks";
import { loadBooksAsync } from "../redux/actions/getBooksActions";

const List = () => {
  const dispatch = useDispatch();

  // get the state from the store
  const { isLoading, list, errorMessage } = useSelector(state => state.books);

  // call the function who get the list of books
  useEffect(() => {
    dispatch(loadBooksAsync());
  }, [dispatch]);

  return (
    <div>
      <HeaderBooks>
        <h1>Mes livres favoris</h1>
      </HeaderBooks>
      <ContainerBooks>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}

        {/* display books from API */}
        {list?.map(book => (
          <Card book={book} key={book.id} />
        ))}
      </ContainerBooks>
    </div>
  );
};

export default List;
