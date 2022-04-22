import { BackLink } from "../../style/components/BackLink";
import { BookResumeDisplay } from "../../style/components/BookResumeDisplay";
import { HeaderBooks } from "../../style/components/HeaderBooks";
import { ImageContainer } from "../../style/components/ImageContainer";
import React from "react";
import { ReadMore } from "../../style/components/ReadMore";

export default function Resume({ currentBook, booksSameAuthor }) {
  const bookToDisplay = () => currentBook && (
    <div key={currentBook.id}>
      <h1>{currentBook.title}</h1>
      <p>Auteur: {currentBook.author}</p>
      <p>ISBN: {currentBook.isbn}</p>
      <ImageContainer>
        <img src={currentBook.cover} alt="detail du livre" />
      </ImageContainer>
    </div>
  );

  return (
    <BookResumeDisplay>
      <HeaderBooks>
        <h1>Détail du livre</h1>
        <BackLink exact="true" to="/">
          Liste des livres
        </BackLink>
      </HeaderBooks>

      {/* display book who match the id param */}
      {bookToDisplay()}

      {/* display link for navigate on the same author book(s)*/}
      {booksSameAuthor?.length && <h3>Livres du même auteur</h3>}
      {booksSameAuthor?.map(book => (
        <ReadMore exact="true" to={`/book-detail/${book.id}`} key={book.id}>
          {book.title}
        </ReadMore>
      ))}
    </BookResumeDisplay>
  );
}
