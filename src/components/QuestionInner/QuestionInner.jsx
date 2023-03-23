import React from "react";

import styles from "./QuestionInner.module.scss";

export const QuestionInner = ({ title, id, titles }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      {id === 1 ? (
        <div className={styles.content}>hello</div>
      ) : (
        <div className={styles.anotherContent}>
          {titles.map((item) => (
            <div className={styles.checkboxWrapper} key={item.id}>
              <div className={styles.checkbox}></div>
              <p className={styles.name}>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
