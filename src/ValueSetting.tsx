import React, {ChangeEvent, useState} from 'react';
import s from "./ValueSetting.module.css"

type PropsType = {
    displayValue: number
    title: string
    setDisplayValue: (value: number) => void
    errorValue: boolean
    //disabledValue:boolean


}
export const ValueSetting: React.FC<PropsType> = ({displayValue, title, setDisplayValue, errorValue}) => {

    const [value, setValue] = useState<number>(displayValue);


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setDisplayValue(Number(e.currentTarget.value))
        setValue(Number(e.currentTarget.value))
    }


    return (
        <div>
        <div className={s.title}>
            {title }
        </div>
        <div>
            <input className={errorValue ? 'Error_1' : 'Input_style'}
                   onChange={onChangeCallback}
                   value={value}

                   type='number'/>
        </div>
            </div>
    );
};

