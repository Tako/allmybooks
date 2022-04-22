import * as Style from './Style';

import React from 'react';

export default function Card(props)  {
  const { book } = props;
  return (
    <Style.BookContainer>
      <Style.CardStyle>
        <Style.TitleBook>{book.title}</Style.TitleBook>
        <p>{book.author}</p>
        <Style.ImageContainer>
          <img src={book.cover} alt="" />
        </Style.ImageContainer>
        {/* pass the id of the book in the url param */}
        <Style.ReadMore exact="true" to={`book-detail/${book.id}`}>
          Voir plus...
        </Style.ReadMore>
      </Style.CardStyle>
    </Style.BookContainer>
  );
};
