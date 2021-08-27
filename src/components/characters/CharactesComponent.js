import {useEffect, useState} from "react";
import CharacterComponent from "./CharacterComponent";
import '../../styles/Characters.css'
import {useDispatch, useSelector} from "react-redux";
import {changePagination, getAllCharacters} from "../../redux/actions/actionCreators";
import {Pagination} from "@material-ui/lab";
// import {Pagination} from "@material-ui/lab";
export default function CharactesComponent() {

    const {pageNext, pagePrev,totalNumberOfPages} = useSelector(state => state)
    const dispatch = useDispatch()

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?page=${pageNext}`)
            .then(response => response.json())
            .then(value => dispatch(getAllCharacters(value)))
    },[pageNext])
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character?page=${pagePrev}`)
            .then(response=>response.json())
            .then(value => dispatch(getAllCharacters(value)))
    },[pagePrev])

    const handlePaginationChange = (event,value) => dispatch(changePagination(value))
    return(
<div>
        {
        characters.map(value=> <CharacterComponent  item={value}/>)
    }
    <div>
        <Pagination
            count={totalNumberOfPages}
            onChange={handlePaginationChange}
            color="primary"
        />
    </div>
    </div>
)}



