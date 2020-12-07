import React from 'react';
import { PATH } from './Routes';
import { v1 } from 'uuid';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

function Header() {
  return (
      <header className={s.header}>
        <div className={s.headerInner}>
          <nav className={s.nav}>
            <ul>
              {Object.values(PATH).map((link) => (
                <li key={v1()} className={s.navItem}>
                  <NavLink className={s.navLink} exact to={link} activeClassName={s.active}>
                    {`${link.charAt(1).toUpperCase()}${link.slice(2).replace(/-/, ' ')}`}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Header;
