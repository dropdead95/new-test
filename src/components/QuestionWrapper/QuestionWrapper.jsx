import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";

import styles from "./QuestionWrapper.module.scss";

import { QuestionInner } from "../QuestionInner";

export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/questions?populate=*",
          {
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );
        setQuestions(res.data.data);
        console.log(questions);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
        {questions.map((item) => (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={<QuestionInner item={item} />}
          />
        ))}
      </Routes>
      <div className={styles.buttons}></div>
    </div>
  );
};
