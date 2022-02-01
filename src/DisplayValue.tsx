import React, {useState} from 'react';
import s from './DisplayValue.module.css'

type PropsType = {
    display: number

    edit: string
}
export const DisplayValue: React.FC<PropsType> = ({edit, display}) => {
    const incorrectValue = edit === 'Incorrect Value' ? 'errorStyle' : ''
    const correctValue = edit === 'Enter Value' ? "goodStyle" : ""


    return (
        <div className={s.Count}>
            <div className={incorrectValue}>
                <div className={correctValue}>
                    {edit === '' ? display : edit}
                </div>
            </div>
        </div>
    );
};

