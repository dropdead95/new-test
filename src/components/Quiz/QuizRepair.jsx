import React, {useState} from "react";
import styles from "./Quiz.module.scss";
import {quizData} from "../../mockData/quiz";
import {PaginationQuiz} from "./PaginationQuize";
import {QuizQuestions} from "./QuizQuestions";


export const QuizRepair = () => {
    let [countQuestion, setCountQuestion] = useState(0)
    let data = quizData[0].repair[countQuestion]
    return <div>
        <div className={styles.container}>

            <div className={styles.body}>
                <span style={{color: "#1EAB5F"}}>Хотите наблюдать за ходом ремонта онлайн?</span>
                <span>Пройдите тест, и мы предоставим вам такую возможность!</span>
                <div className={styles.pagination}>
                    {quizData[0].repair.map(t => <PaginationQuiz
                        key={t.id} number={t.id} countQuestion={countQuestion} setCountQuestion={setCountQuestion}/>)}
                </div>

                <QuizQuestions data={data}/>

                <button style={{margin: 30, height:30,width: 100}} onClick={() => setCountQuestion(++countQuestion)}>fds</button>
                {quizData[0].repair.length}</div>

        </div>
    </div>
}

