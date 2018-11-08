import Link from 'next/link';
import Navi from '~/components/Navi/Navi';

const Header = () => (
  <div>
    <div className="bar">
      <Link href="/">
        <a>Sick Bar</a>
      </Link>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
    <Navi />
  </div>
);

export default Header;

