import React from "react";
import  './RadionButton.scss'


export const RadioButton = ({text}) => {


    return (
        <label  className="radio-label">
            <input
                className="radio-input"
                type="radio"
                name="radio"
                id="id"
            />
            <span className="custom-radio" />
            {text}

        </label>
    )
}