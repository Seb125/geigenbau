import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";

const ViolinContext = React.createContext();



function ViolinWrapper(props) {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const data = axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            setCharacters(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
}, [])


  return (
    <ViolinContext.Provider value={{characters}}>
        {props.children}
    </ViolinContext.Provider>
  )
}

export {ViolinContext, ViolinWrapper}