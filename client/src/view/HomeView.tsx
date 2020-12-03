import React, { useState } from 'react';
//import Axios from 'axios';
import PokemonService from '../shared/api/service/PokemonService'

export const HomeView = () => {

    // deklarera ett state med tomt initialt värde
    const [data, setData] = useState<any>()
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
        console.log(data)
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

    /*const pokemonImage = `https://pokeres.bastionbot.org/images/pokemon/1.png`

    const getPokemonImage = async () => {
        const response = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`)
        const data = await response.json()
        console.log(data)
    }*/


    return (
        <div>
            <h1>
                Det här är HomeView
            </h1>
            <h2>Välkommen till Glutenfritt!</h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc sem, facilisis in dui sit amet, viverra aliquam diam. Aliquam eget sollicitudin sem, id porttitor metus. Fusce condimentum, erat ut vehicula faucibus, turpis sapien bibendum diam, vitae dictum tellus dui ut justo. In fermentum, ligula ac accumsan condimentum, enim orci posuere ex, id consectetur ligula diam sed tellus. Vestibulum non purus ut metus aliquam tristique ut sodales nibh. Nulla consequat aliquet mattis. Integer pulvinar nibh nec feugiat ultricies. Donec ut velit ipsum. Nam eu ornare nibh, ac efficitur massa.</h4>
            <h2>{search}</h2>
            <span>Sök efter pokemon:</span>
            <input onChange={(event) => setSearch(event.target.value)}/>
            
            <button onClick={() => fetchDataFromExternalAPI()}>Hämta pokemon</button> 
            {displayData()}
            
        </div>
    )
}