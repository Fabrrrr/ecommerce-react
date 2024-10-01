import { Outlet, Link } from 'react-router-dom'; //avoid wraping div
import { Fragment } from 'react';
import {ReactComponent as Logo} from '../../assets/logo/logo.svg';

import './navigation.styles.scss';
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'></Logo>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/sign-in'>
            Sign-in
          </Link>
        </div>
      </div>
      <Outlet /> {/* Defines what component should persist. By putting Outlet after the persistant segment */}
    </Fragment>
  );
}

export default Navigation;