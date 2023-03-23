import React from "react";
import {Routes, Route} from "react-router-dom";

import {Layout, Main} from "../../pages";
import {QuizRepair} from "../../components/Quiz/QuizRepair";

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path='/quiz-repair' element={<QuizRepair/>}/>
            </Route>
        </Routes>
    );
};
