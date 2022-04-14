import React, { useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import  {loadBooksAsync } from '../redux/actions/getBooksActions';
import Card from "./Card";
import { ContainerBooks } from '../style/components/ContainerBooks';
import { HeaderBooks } from '../style/components/HeaderBooks';

export default function List() {
  const dispatch = useDispatch();
  const { isLoading, books, errorMessage } = useSelector((state) => state.books);


  useEffect(() => {  
    dispatch(loadBooksAsync())
  }, [dispatch]);

  return (
    <div>
      <HeaderBooks>
        <h1>Mes livres favoris</h1>
      </HeaderBooks>
      <ContainerBooks>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
      
        {books && books.books.map(book => 
        
          <Card book={book} key={book.id} /> 
        )}
      </ContainerBooks> 
    </div>
  );
};
