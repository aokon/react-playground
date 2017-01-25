import { renderComponent , expect } from '../test_helper';
import { BOOK_SELECTED } from '../../src/actions/types';
import { selectBook } from '../../src/actions';

describe('Actions', () => {
  describe('selectBook', () => {
    it('has the correct type', () => {
      expect(selectBook().type).to.eql(BOOK_SELECTED);
    });

    it('has the correct payload', () => {
      const book = { title: 'Dummy', pages: 111 };

      expect(selectBook(book).payload).to.eql(book);
    });
  });
});
