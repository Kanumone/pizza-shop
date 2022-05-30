import React from 'react';
import styles from './NotFoundBlock.module.scss';

export default function index() {
  return (
    <div className={styles.root}>
      <span>🙁</span>
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>Такой страницы не существует</p>
    </div>
  );
}
