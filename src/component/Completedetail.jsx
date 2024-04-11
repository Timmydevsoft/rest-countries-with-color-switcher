import React from 'react'
import { nanoid } from 'nanoid'
import Border from './Border'

export default function Completedetail (props){
    const languages = props.language.map(lang=>{
        return(<span key= {lang["iso639_1"]}>{lang["name"]}</span>)


    })

    

   
    return(
        <div className="detailed-info-cotainer">
            <button className={`back-to-preview ${props.mode? "dark": ""}`} onClick = {props.goBack}>Back</button>

            <div className={`detail-info ${props.mode? "dark" : ""}`}>
                <img src= {props.flag} alt="flag" />

                <div className="text-details">

                    <div className="top-info">
                        <div className="left-top-info">
                           <h3 className={`detaled-country-name ${props.mode? "dark": ""}`}>{props.name}</h3>

                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Native Name: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.nativename}</span></p>
                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Population: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.population}</span></p>
                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Region: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.region}</span></p>
                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Sub Region: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.subregion}</span></p>
                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Capital: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.capital}</span></p>
                        </div>

                        <div className="top-right-info">
                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Top Level Domain: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.topleveldomain}</span></p>
                            <p className= {`detprompt ${props.mode? "dark": ""}`}>Currencies: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{props.currencies}</span></p>
                            <div className= {`detprompt ${props.mode? "dark": ""}`}>Languages: <span className = {`detailval ${props.mode ? "dark" : ""}`}>{languages}</span></div>
                        </div>

                    </div>

                    <Border
                       myObjs = {props.bodholder}
                       mode = {props.mode}
                    />

                </div>

            </div>


        </div>
    )
}