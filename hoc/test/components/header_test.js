import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('renders home link', () => {
    expect(component.find('a:first')).to.have.text('Home');
  });

  it('renders Resources link', () => {
    expect(component.find('a:last')).to.have.text('Resources');
  });

  it('renders Auth Button', () => {
    expect(component.find('button')).to.have.text('Sign in');
  });
});
