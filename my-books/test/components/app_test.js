import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders main container', () => {
    expect(component).to.have.class('book-app');
  });

  it('renders book list', () => {
    expect(component.find('.list-group')).to.exist;
  });

  it('renders book detail', () => {
    expect(component.find('.book-detail')).to.exist;
  });
});
