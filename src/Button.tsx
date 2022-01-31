import React from 'react';
import './App.css';
// import style from './Buttons.module.css'
export type ButtonType = {
    onClick: () => void
    disabled: boolean
    title: string
}

function Button(props: ButtonType) {
    const disabledButton = props.disabled === true ? 'd-style' : "";
    const buttons = `btn ${disabledButton}`
    return (
        <div>
            <button
                onClick={props.onClick}
                disabled={props.disabled}
                className={buttons}
            >{props.title} </button>

        </div>
    );
}

export default Button;
