import React from 'react'

export default function borders (props){
    if(props.myObjs.hasOwnProperty("borders")){
        
        return(
            <div className="bottom-container">
                <p  className= {`detprompt ${props.mode? "dark": ""}`}>Border Countries:</p>
                <div className="borders">
                    {props.myObjs["borders"].map(border => (
                        <div className={`border-country ${props.mode ? "dark" : ""}`} key= {border}>{border}</div>
                    ))}
                </div>

            </div>
        );
    }

    else{
        return(
            <div className="bottom-container">
                <p  className= {`detprompt ${props.mode? "dark": ""}`}>Border Countries:</p>
            </div>
        )
    }

}