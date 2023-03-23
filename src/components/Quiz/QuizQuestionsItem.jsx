import React from "react";
import styles from "./Quiz.module.scss";
import {RadioButton} from "../RadioButton/RadioButton";


export const QuizQuestionsItem = (props) => {
    return <div className={styles.item}>
        <div className={styles.radioBtn}><RadioButton text={props.data.value}/></div>
    </div>
}