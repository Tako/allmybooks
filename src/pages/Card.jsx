import React from 'react';
import { ReadMore } from '../style/components/ReadMore';
import { BookContainer } from '../style/components/BookContainer';
import { ImageContainer } from '../style/components/ImageContainer';
import { TitleBook } from '../style/components/TitleBook';
import { CardStyle } from '../style/components/CardStyle';


export default function Card(props)  {
  const { book } = props;
  return (
    <BookContainer>
      <CardStyle>
        <TitleBook>{book.title}</TitleBook>
        <p>{book.author}</p>
        <ImageContainer>
          <img src={book.cover} alt="" />
        </ImageContainer>
        <ReadMore exact="true" to={`book-detail?id=${book.id}`}>
          Voir plus...
        </ReadMore>
      </CardStyle>
    </BookContainer>
  );
};
