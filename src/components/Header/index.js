import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import { Sun, Moon } from 'react-feather';

import IconWootsbot from 'images/logo.svg';
import IconWootsbotDark from 'images/logoDark.svg';

import styles from './styles.module.scss';

function Header({ isThemeDark, onThemeDark }) {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Link to="/">
          <img
            className={styles.logo}
            aria-label="React Next Boilerplate Logo"
            alt="logo"
            src={isThemeDark ? IconWootsbotDark : IconWootsbot}
          />
        </Link>

        <div className={styles.spacer} />

        <ul className={styles.navList}>
          <li className={styles.liLink}>
            <Link className={styles.link} to="/">
              Open Source
            </Link>
          </li>

          <li className={styles.liLink}>
            <Link className={styles.link} to="/">
              Articulos
            </Link>
          </li>

          <li className={styles.liLink}>
            <Link className={styles.link} to="/">
              Galeria
            </Link>
          </li>

          <li className={styles.liLink}>
            <button type="button" className={styles.switchDarkMode} onClick={onThemeDark}>
              {isThemeDark ? <Sun size={20} color="#f7df1e" /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isThemeDark: PropTypes.bool,
  onThemeDark: PropTypes.func,
};

export default Header;
