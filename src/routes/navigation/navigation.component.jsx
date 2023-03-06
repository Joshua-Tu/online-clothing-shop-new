import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => (
  <Fragment>
    <div className='navigation'>
      <Link to='/' className='logo-container'>
        <div>
          <CrwnLogo className='logo' />
        </div>
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='nav-link' to='/sign-in'>
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>
);

export default Navigation;
