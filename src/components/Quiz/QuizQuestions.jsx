import React from "react";
import {QuizQuestionsItemIMG} from "./QuizQuestionsItemIMG";
import styles from "./Quiz.module.scss";
import {QuizQuestionsItemInput} from "./QuizQuestionsItemInput";
import {QuizQuestionsItem} from "./QuizQuestionsItem";


export const QuizQuestions = ({data}) => {
    return <div>
        <div>{data.title}</div>
        {data.id === 0 ? <div className={styles.itemsWithImage}>{data.values.map(t => <QuizQuestionsItemIMG  key={t.id} data={t}/>)}</div> : data.id === 2 ? <QuizQuestionsItemInput /> : <div className={styles.items}>{data.values.map(t => <QuizQuestionsItem key={t.id} data={t} />)}</div>}
    </div>
}
