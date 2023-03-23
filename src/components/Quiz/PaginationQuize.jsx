import React from "react";
import styles from "./Quiz.module.scss";





export const PaginationQuiz = ({number, countQuestion, setCountQuestion}) => {




    return <div className={number === countQuestion ? `${styles.circle} ${styles.active}` : number < countQuestion ? `${styles.circle} ${styles.prev}` : styles.circle} onClick={() => setCountQuestion(number)}>{number + 1}</div>
}