import {useEffect, useState} from "react";
import CharacterComponent from "./CharacterComponent";
import "../../styles/Characters.css"
export default function CharactesComponent(){

   const [characters, setCharacters] = useState([])
   const [info, setInfo]= useState({})
   const url='https://rickandmortyapi.com/api/character'

   const fecthCharacters = (url)=>{
      fetch(url)
          .then((response)=>response.json())
          .then((data)=>{
             setCharacters(data.results);
             setInfo(data.info);
          })
          .catch((error)=>{
              console.log(error);
          }) 
   }
    const handleNextPage = () => {
        fecthCharacters (info.next);
        window.scrollTo(0, 0);
    };

    const handlePreviousPage = () => {
        fecthCharacters (info.prev);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fecthCharacters (url);
    }, []);
   return(
<div className="">
    <div className="container py-5">
        <nav>
            <ul className="pagination justify-content-center">
                {info.prev ? (
                    <li className="page-item">
                        <button className="page-link" onClick={handlePreviousPage}>
                            Previous
                        </button>
                    </li>
                ) : null}
                {info.next ? (
                    <li className="page-item">
                        <button className="page-link" onClick={handleNextPage}>
                            Next
                        </button>
                    </li>
                ) : null}
            </ul>
        </nav>
    </div>
    <div className="block">{
        characters.map(value => <CharacterComponent item={value}/>)
    }</div>

</div>
)}
// const [characters, setCharacters] = useState([])
// useEffect(()=>{
//     fetch('https://rickandmortyapi.com/api/character')
//         .then(value => value.json())
//         .then(value => {
//             setCharacters(value.results)
//
//         })
// fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(json => console.log(json))
// fetch(`https://rickandmortyapi.com/api/character/${page}`)
//     .then(response=> response.json)
//     .then(value => value.json)
// },[])

