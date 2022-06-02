import { Link } from 'react-router-dom';

import HeaderCart from './CartButton';
import Search from '../Search';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <HeaderCart />
      </div>
    </div>
  );
}

export default Header;
