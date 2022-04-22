import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Resume from './Resume'
import { loadBooksAsync } from '../../redux/actions/getBooksActions';
import { useParams } from 'react-router-dom';

export const ResumeContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { list } = useSelector((state) => state.books);
    
    useEffect(() => {
      dispatch(loadBooksAsync());
    }, [dispatch]);
    
    const currentBook = list?.find(book => book.id === id);

    const booksSameAuthor = list?.filter(book => book.author === currentBook.author && book.id !== currentBook.id);

    const props = {
        currentBook,
        booksSameAuthor
    }
    return <Resume {...props} />
}
