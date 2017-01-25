import { BOOK_SELECTED } from './types';

export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  }
};
