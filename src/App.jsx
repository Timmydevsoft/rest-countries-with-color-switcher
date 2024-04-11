import React from 'react'
import Header from './component/Header'
import Countrypreview from './component/Countrypreview'
import data from './component/Data'
import { nanoid } from 'nanoid'
import searchIcon from './assets/search.svg'
import Select from './component/Select'
import Completedetail from './component/Completedetail'
import moon from './assets/clarity_moon-solid.svg'
import dark from './assets/darkmoo.svg'
// import DAT from './'




import './App.css'

const App = ()=> {
  
  const[mode,setMode] = React.useState(false);

    const changeMode = ()=>{
        setMode(prev=>!prev)
    }

    // PREVIEW FUNCTION

    const[info, setInfo] = React.useState(data);// This state hold the data withouth unique id

    const correctData = info.map(eachinf=>{
      return{id: nanoid(), ...eachinf} // each object was given unique id using nanoid
    });

    const[datWidthId, SetDatWithId] = React.useState(correctData)


    const[showDetails, setShowDetails] = React.useState(true)

    const hidePreview = {display: showDetails? "flex" : "none"};

    const [identity, setIdentity] = React.useState();
    const[border,setBorder] = React.useState();


    const[formData, setFormData] = React.useState({
      "COUNTRY": "",
      "region": "",
      status: false
    })

    function clicked (event){
      const{name, value, type, checked} = event.target

      setFormData(preForm =>{
        return{...preForm,
          [name]: type === "checkbox"? checked : value
        }

      });

     
      
    }

    React.useEffect(()=>{
      if(formData["region"] !== ""){
        const Reg = correctData.filter(dat=> dat["region"] === formData["region"]);
        SetDatWithId(Reg);
    
      }
      else{
        SetDatWithId(correctData);
      }
    },[formData["region"]])

    // This is the function for searching for country by name

    function searchCountry (){
      let serchc = datWidthId.find(country=> country["name"] === formData["COUNTRY"]);
       if(serchc){
      
        setShowDetails (prev=> !prev);
        setIdentity(serchc);
       }

       else{
        setFormData(pre =>{
          return{...pre, status:!pre.status}
        })
       }
    }

    
    function onCountryClick (id) {
      const clickeCountry = datWidthId.find(country => country.id === id);
      setShowDetails (prev=> !prev);
      setIdentity(clickeCountry);
    

    }


    const previewContent = datWidthId.map(item =>{

      return(
        <Countrypreview
            key = {item.id}
            id = {item.id}
            handleView = {onCountryClick}
            prevImage = {item["flag"]}
            countryname = {item["name"]}
            population = {item["population"]}
            region = {item["region"]}
            capital = {item["capital"]}
            modeColor = {mode}
        />
      )
    })

    const unshow = ()=>{
      setShowDetails(previous => !previous)
    }


    // DETAILED COUNTRIES SCRIPT HERE


  return(
    <div className= {`app-holder ${mode ? "dark" : ""}`}>
      <Header
      mode= {mode}
        title = "Where in the world?"
        modeIcon = {mode? moon : dark}
        modeText = {mode? "Dark Mode" : "Light Mode"}
        changecolor = {changeMode}
      />

       <div className="contents-body">

        {/* FORM SECTION */}
          <form className='form' style = {hidePreview}>
           <div className= "search-box-holder"> 
                <p className={`error ${formData.status? "" : "open"}`}>
                  {formData["region"] !== "" ? "name does not match any counrty in this region": "name does not match any country in the world"}
                </p>
                <div className={`searc-by-name-container ${!mode? "" : "dark"}`}>

                    <img src= {searchIcon} 
                        alt="search icon"
                        onClick = {searchCountry}

                    />
                    <input className= {`input ${!mode? "" : "dark"}`}
                      type= 'text'
                      name ="COUNTRY"
                      value = {formData["COUNTRY"]}
                      onChange = {clicked}
                      placeholder='Search for a country...' 
                    />

                </div>
           </div>

            <div className = {`filtering-container ${!mode? "" : "dark"}`}>

              <Select
                mode = {mode}
                regionvalue = {formData.region}
                click = {clicked}
                regName = {"region"}
              />

            </div>
          </form>
          {/* FORM SECTION END S HERE */}

          {showDetails? (<div className="countries-list-container"style = {hidePreview} >
              {previewContent}
            </div>) : (<div className="full-details-container" display = {showDetails? "none" : "flex"} >
                 <Completedetail
                  mode = {mode}
                    goBack = {unshow}
                    specc = {identity}
                    flag = {identity["flag"]}
                    name = {identity["name"]}
                    nativename = {identity["nativeName"]}
                    population = {identity["population"]}
                    region = {identity["region"]}
                    subregion = {identity["subregion"]}
                    capital = {identity["capital"]}
                    topleveldomain = {identity["topLevelDomain"]}
                    currencies = {identity["currencies"][0]["name"]}
                    language = {identity["languages"]}
                    bodholder = {identity}
                 />
          </div>)
        }

      </div>

  

    </div>
  )
}

export default App
