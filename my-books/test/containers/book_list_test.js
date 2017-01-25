import { renderComponent , expect } from '../test_helper';
import BookList from '../../src/containers/book_list';

describe('BookList', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(BookList);
  });

  it('has valid top class', () => {
    expect(component).to.have.class('list-group');
  });

  it('renders books in separate li', () => {
    expect(component.find('li.list-group-item').length).to.eql(6)
  });
});
