import React, {useState} from 'react';

type PropsType = {
    display: number

    edit: string
}
export const DisplayValue :React.FC<PropsType> =({edit,display}) => {
    const incorrectValue = edit === 'Incorrect Value' ? 'errorStyle' : ''



    return (
        <div className={incorrectValue}>
            {edit === '' ? display : edit}
        </div>
    );
};

