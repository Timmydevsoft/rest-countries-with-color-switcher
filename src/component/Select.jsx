import React from 'react'
import searchIcon from '../assets/search.svg'
export default function Select (props){

    return(
        <select 
              className={`select ${!props.mode ? "" : "dark"}`}
              id="region-filtering"
               value= {props.regionvalue}
               onChange = {props.click}
                name= {props.regName}
        >

            <option className={`options  ${!props.mode ? "" : "dark"}`} value="">Filter by Region</option>
            <option className={`options  ${!props.mode ? "" : "dark"}`} value="Africa">Africa</option>
            <option className={`options  ${!props.mode ? "" : "dark"}`} value="Americas">Americas</option>
            <option className={`options  ${!props.mode ? "" : "dark"}`} value="Asia">Asia</option>
            <option className={`options  ${!props.mode ? "" : "dark"}`} value="Europe">Europe</option>
            <option className={`options  ${!props.mode ? "" : "dark"}`} value="Oceania">Oceania</option>

        </select>
    )
}