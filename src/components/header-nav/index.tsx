import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function HeaderNav() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="navListItem">
            <NavLink exact to="/" activeClassName="selected">
              Posts
            </NavLink>
          </li>
          <li className="navListItem">
            <NavLink to="/user" activeClassName="selected">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderNav;
