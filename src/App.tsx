import React, {useEffect, useState} from 'react';

import './App.css';
import Counter from './Counter';
import Button from "./Button";
import {SetCounter} from "./SetCounter";
import {ButtonSet} from "./ButtonSet";


function App() {
    const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(5)
    const [counter, setCounter] = useState<number>(startValue)
    const [edit, setEdit] = useState<string>("")


    const startValueHandler = (value: number) => {
        setStartValue(value)
        if (value < endValue && value >= 0) {
            setEdit("Enter Value")
        } else {
            setEdit("Incorrect Value")
        }
    }

    const endValueHandler = (value: number) => {
        setEndValue(value)
        if (value > startValue && value > 0) {
            setEdit('Enter Value')
        } else {
            setEdit('Incorrect Value')
        }
    }

    function counterInc() {
        if (counter < endValue) {
            setCounter(counter + 1)
        }
    }

    function counterRes() {
        setCounter(startValue)

    }


    useEffect(() => {
        let localItem = localStorage.getItem('CounterValue')
        let localItemEndValue = localStorage.getItem('End Value')
        if (localItem) {
            let newValue = JSON.parse(localItem)
            setStartValue(newValue)
            setCounter(newValue)
        }

        if (localItemEndValue) {
            let newValueEnd = JSON.parse(localItemEndValue)
            setEndValue(newValueEnd)


        }
    }, [])


    useEffect(() => {
        localStorage.setItem('CounterValue', JSON.stringify(startValue))
        localStorage.setItem('End Value', JSON.stringify(endValue))
    }, [startValue, endValue])


    const setChange = () => {

        setCounter(startValue)
        setEdit('')

    }


    const errorValue = edit === 'Incorrect Value'

    const errorNumber = counter === endValue

    const disabledInc = counter === endValue || startValue < 0 || startValue >= endValue
    const disabledRes = counter === startValue || startValue < 0 || startValue >= endValue
    const disabledSet = startValue < 0 || startValue >= endValue
    return (
        <div className="App">

            <div className="Counter1">
                <Counter display={counter}
                         errorNumber={errorNumber}
                         edit={edit}
                />
                <div className="Buttons">
                <Button title={"Inc"} onClick={counterInc} disabled={disabledInc}/>
                <Button title={"Reset"} onClick={counterRes} disabled={disabledRes}/>
                </div>
            </div>

            <div className="Counter2">
                <SetCounter minValue={startValue}
                            maxValue={endValue}
                            setMinValue={startValueHandler}
                            setMaxValue={endValueHandler}
                            error={errorValue}
                />
                <div className="Buttons">
                    <ButtonSet title={"Set"}
                               setHandler={setChange}
                               disabled={disabledSet}
                    />

                </div>
            </div>

        </div>


    );
}

export default App;
