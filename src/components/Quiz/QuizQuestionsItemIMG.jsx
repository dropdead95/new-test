import React from "react";
import styles from "./Quiz.module.scss";
import {RadioButton} from "../RadioButton/RadioButton";


export const QuizQuestionsItemIMG = (props) => {
    return <div className={styles.itemRow}><img src={props.data.img} alt="image"/>
        <div className={styles.radioBtn}><RadioButton text={props.data.value}/></div>
    </div>
}