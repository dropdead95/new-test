import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import styles from "./QuestionWrapper.module.scss";

import { QuestionInner } from "../QuestionInner";
import { quizData } from "../../mockData/quiz";

export const QuestionWrapper = () => {
  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? styles.active : styles.number
              }
              to={`${index + 1}`}
            >
              {index + 1}
            </NavLink>
          ))}
      </div>
      <Routes>
        {quizData[1].building.map((question) => (
          <Route
            key={question.id}
            path={`${question.id}`}
            element={
              <QuestionInner
                title={question.title}
                id={question.id}
                titles={question.values}
              />
            }
          />
        ))}
      </Routes>
      <div className={styles.buttons}></div>
    </div>
  );
};
