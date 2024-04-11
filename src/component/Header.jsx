import React from 'react'

export default function Header (props){

    

    return(
        <header className={`header ${!props.mode ? "" : "dark"}`}>
            <h1 className={`title ${!props.mode ? "" : "dark"}`}>{props.title}</h1>
            <div className="theme-switch-contaner">

               <button className='mode-button'  onClick = {props.changecolor}>  
                    <img id="mode-icon" src={props.modeIcon}/>
                    <span className={`modetext ${!props.mode ? "" : "dark"}`}>{props.modeText}</span>
                </button>

            </div>
        </header>
    )
}

