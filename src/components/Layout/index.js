import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

function Layout({ children }) {
  const [themeDark, setThemeDark] = useState(false);

  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.classList.add('theme-light');
    }
  }, [themeDark]);

  return (
    <>
      <Header isThemeDark={themeDark} onThemeDark={() => setThemeDark(!themeDark)} />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
