import React from 'react';
import { Link } from 'react-router-dom';
import s from './Error404.module.css';

function Error404() {
  return (
    <div className={s.page}>
      <div className={s.main}>
        <h1 className={s.title}>404 - Page not&nbsp;found</h1>
        <h2 className={s.text}>
          —<span>Uh oh.</span> <span>¯\_(ツ)_/¯</span>—
        </h2>
      </div>
      <footer className={s.footer}>
        <div className={s.footerText}>
          Take me back to:&nbsp;
          <Link className={s.link} to="/">
            home page
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Error404;
