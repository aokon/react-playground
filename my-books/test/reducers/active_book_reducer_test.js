import { renderComponent , expect } from '../test_helper';
import { BOOK_SELECTED } from '../../src/actions/types';
import activeBookReducer from '../../src/reducers/active_book_reducer';

describe('Active Book Reducer', () => {
  it('handles action with unknow type', () => {
    expect(activeBookReducer(null, {})).to.eql(null);
  });

  it('handles action with BOOK_SELECTED type', () => {
    const book = { title: "Dummy Book", pages: 11 };
    const action = { type: BOOK_SELECTED, payload: book };

    expect(activeBookReducer(null, action)).to.eql(book);
  });
});
