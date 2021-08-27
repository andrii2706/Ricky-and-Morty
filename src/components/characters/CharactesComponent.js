import {useState} from "react";
import CharacterComponent from "./CharacterComponent";
import ReactPaginate from 'react-paginate'
import '../../styles/Characters.css'
// import {Pagination} from "@material-ui/lab";
export default function CharactesComponent() {

    const [characters, setCharacters] = useState([])
    const [page, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    // const handleFetch = () =>{
    //     fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    // }
    const url = `https://rickandmortyapi.com/api/character?page=${page}`
    const handleFetch = () => {
        fetch(url)
            .then(response => response.json())
            .then(value => {
                setCharacters([...value.results]);
                setPageCount(value.pages)
            })
        console.log(handleFetch());
    }
    const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected);
    handleFetch();
}
    return(
<div>
    <button onClick={handleFetch}>Get Data</button>
    {
        characters.map(value=> <CharacterComponent  item={value}/>)
    }

    <div className="container"><ReactPaginate
        pageCount={pageCount}
        pageRange={1}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}/>
    {/*    <Pagination count={page} defaultPage={1}  onChange={handlePageChange} variant="outlined" color="secondary" />*/}
    </div>
</div>
)}



