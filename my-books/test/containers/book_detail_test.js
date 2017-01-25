import { renderComponent , expect } from '../test_helper';
import BookDetail from '../../src/containers/book_detail';

describe('BookDetail', () => {
  it('contain valid top class', () => {
    const component = renderComponent(BookDetail);

    expect(component).to.have.class('book-detail');
  });

  it('renders notice when there is empty book', () => {
    const component = renderComponent(BookDetail);

    expect(component).to.contain('Select a book to get started');
  });

  it('renders book details for valid book', () => {
    const defaultState = { activeBook: { title: "Dummy book", pages: 401 }};
    const component = renderComponent(BookDetail, null, defaultState);

    expect(component.find('h3')).to.contain(defaultState.activeBook.title);
    expect(component.find('.page-num')).to.contain(defaultState.activeBook.pages);
  });
});
