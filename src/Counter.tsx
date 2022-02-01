import React, {useState} from 'react';

import './App.css';
import {DisplayValue} from "./DisplayValue";
import s from "./Counter.module.css"

export type CounterType = {
    display: number

    errorNumber: boolean
    edit: string
}

function Counter(props: CounterType) {


    return (
        <div className={s.Display}>
            <div className={props.errorNumber ? 'NumberError' : "Number1"}>
                <DisplayValue display={props.display}
                              edit={props.edit}
                />


            </div>


        </div>


    );
}

export default Counter;
