import React from 'react';


type ButtonSetType={
    title:string
    disabled:boolean
    setHandler:()=>void
    edit:string
}


export const ButtonSet = (props:ButtonSetType) => {
    const disabledB=props.edit===""

    const disabledButton=props.disabled?'d-style':"";
    const buttons=`btn ${disabledButton}`




    return (
        <div>
            <button disabled={props.disabled||disabledB}

                    onClick={props.setHandler}
                    className={buttons}

            >
                {props.title}

            </button>
        </div>
    );
};

