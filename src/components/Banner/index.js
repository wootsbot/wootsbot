import React from 'react';

import styles from './styles.module.scss';

import AvatarW from 'images/avatar_w.jpg';

function Banner() {
  return (
    <section className={styles.root}>
      <div className={styles.row}>
        <div className={styles.avatar}>
          <figure className={styles.avatarFigure}>
            <img className={styles.figureImg} src={AvatarW} alt="wootsbot" />
          </figure>
        </div>

        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Hola, Soy Jorge Luis Calleja A.</h1>

          <p className={styles.contentDescription}>
            Ingeniero de software, llevo más de 3 años liderando mi carrera como desarrollador de JavaScript. Entusiasta
            del código abierto y fotógrafo apasionado, me gusta compartir lo que aprendo de javascript y la web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
