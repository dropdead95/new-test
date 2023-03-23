import React from "react";

import styles from "./QuizBuilding.module.scss";

import { Container } from "../Container";
import { QuestionWrapper } from "../QuestionWrapper";

export const QuizBuilding = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.quizContainer}>
        <p className={styles.info}>
          Гарантируем качество и сроки выполненных работ.
        </p>
        <QuestionWrapper />
      </Container>
    </section>
  );
};
