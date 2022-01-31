import React from 'react';


type ButtonSetType={
    title:string
    disabled:boolean
    setHandler:()=>void
}


export const ButtonSet = (props:ButtonSetType) => {

    const disabledButton=props.disabled?'d-style':"";
    const buttons=`btn ${disabledButton}`
    return (
        <div>
            <button disabled={props.disabled}

                    onClick={props.setHandler}
                    className={buttons}

            >
                {props.title}

            </button>
        </div>
    );
};

