import {useEffect, useState} from "react";

export default function CharactesComponent(){

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setCharacters(value.results.id)

            })
        // fetch('https://rickandmortyapi.com/api/character')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        // fetch(`https://rickandmortyapi.com/api/character/${page}`)
        //     .then(response=> response.json)
        //     .then(value => value.json)
    },[])


    return(
<div>
    {
        characters.map(value=> <CharactesComponent item={value}/>)
    }
</div>
)}
