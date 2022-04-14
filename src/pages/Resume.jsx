import React from 'react';
import { useSelector } from'react-redux';
import { useLocation } from "react-router-dom";
import { BookResumeDisplay } from '../style/components/BookResumeDisplay';
import { HeaderBooks } from '../style/components/HeaderBooks';
import { ImageContainer } from '../style/components/ImageContainer';
import { BackLink } from '../style/components/BackLink';


export default function Resume() {

  // get the state from te store
  const book = useSelector((state) => state.books);
  const myBook = book.books.books;

  // get id from the url param
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();

  // function who filter the array and display the book id who match the id param
  function getBook() {
    const result = myBook.filter(book => book.id === query.get("id"))
    return result;
  }

  return (
    <BookResumeDisplay>
      <HeaderBooks>
        <h1>Détail du livre</h1>
        <BackLink exact="true" to="/">
          Liste des livres
        </BackLink>
      </HeaderBooks>

      {/* display book who match the id param */}
      {getBook().map(book => 
        <div key={book.id}>
          <h1>{book.title}</h1>
          <p>Auteur: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
          <ImageContainer>
            <img src={book.cover} alt='detail du livre' />
          </ImageContainer>
        </div>
      )}
    </BookResumeDisplay>
  );
};
