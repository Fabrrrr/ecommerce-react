import { Outlet, Link } from 'react-router-dom'; //avoid wraping div
import { Fragment } from 'react';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <h1>Logo</h1>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet /> {/* Defines what component should persist */}
    </Fragment>
  );
}

export default Navigation;