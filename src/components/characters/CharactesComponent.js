import {useEffect, useState} from "react";
import CharacterComponent from "./CharacterComponent";

export default function CharactesComponent(){

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setCharacters(value.results)

            })
        // fetch(`https://rickandmortyapi.com/api/character/${page}`)
        //     .then(response=> response.json)
        //     .then(value => value.json)
    },[])


    return(
<div>
    {
        characters.map(value=> <CharacterComponent item={value}/>)
    }

</div>
)}
