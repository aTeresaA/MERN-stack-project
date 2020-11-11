import React, { useState } from 'react';
//import Axios from 'axios';
import PokemonService from '../shared/api/service/PokemonService'

export const HomeView = () => {

    // deklarera ett state med tomt initialt värde
    const [data, setData] = useState()
    // deklarera ett state med tom sträng
    const [search, setSearch] = useState("")
    
    const fetchDataFromExternalAPI = () => {

        PokemonService.searchForPokemon(search.toLowerCase())
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
        //Axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        //Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")

        /*.then((response) => setData(response.data))
        .catch((error) => console.log(error))*/
        //under return <button onClick={() => console.log(data)}>Visa Pokemon</button>)
    }

    const displayData = () => {
        if(data){
            return <div>
                <h3>pokemon: {data.name}</h3>
                <h3>vikt: {data.weight}</h3>
                <h3>längd: {data.height}</h3>
                <h3>typ: {data.types[0].type.name}</h3>
            </div>
        } 
    }

    return (
        <div>
            <h1>
                Det här är HomeView
            </h1>
            <h2>{search}</h2>
            <span>Sök efter pokemon:</span>
            <input onChange={(event) => setSearch(event.target.value)}/>
            <br />
            <button onClick={() => fetchDataFromExternalAPI()}>Hämta pokemon</button> 
            {displayData()}
            
        </div>
    )
}