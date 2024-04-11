import React from "react"

export default function Countrypreview (props){

    const modeBg = {
        backgroundColor: props.modeColor? " hsl(209, 23%, 22%)" : "white"
    }
    const handleClick = ()=>{
        props.handleView(props.id)
    }
 return(
    <div className={`preview-container ${!props.modeColor? "" : "dark"}`} style = {modeBg} onClick = {handleClick}>
        <img src= {props.prevImage} alt={props.countryname} />
        <div className={`preview-text-container ${!props.modeColor? "" : "dark"}`}>
            <h2 className={`conntry-name ${!props.modeColor? "" : "dark"}`}>{props.countryname}</h2>
            <p className={`preview-value ${!props.modeColor? "" : "dark"}`}>Population: <span className = {`prev-text-values ${props.modeColor? "dark" : ""}`}>{props.population}</span></p>
            <p className={`preview-value ${!props.modeColor? "" : "dark"}`}>Region: <span className = {`prev-text-values ${props.modeColor? "dark" : ""}`}>{props.region}</span></p>
            <p className={`preview-value ${!props.modeColor? "" : "dark"}`}>Capital: <span className = {`prev-text-values ${props.modeColor? "dark" : ""}`}>{props.capital}</span></p>
        </div>
    </div>

 )
}

