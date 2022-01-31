import React from 'react';
import {ValueSetting} from "./ValueSetting";

export type PropsType = {
    minValue: number
    maxValue: number
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    error: boolean
    // disabledStart:boolean
    // disabledEnd:boolean


}

export const SetCounter = (props: PropsType) => {

    return (
        <div>


            <ValueSetting title='Start Value'
                          displayValue={props.minValue}
                          setDisplayValue={props.setMinValue}
                          errorValue={props.error}
                //disabledValue={props.disabledStart}

            />
            <ValueSetting title='Max Value'
                          displayValue={props.maxValue}
                          setDisplayValue={props.setMaxValue}
                          errorValue={props.error}
                //disabledValue={props.disabledEnd}


            />


        </div>
    );
};

