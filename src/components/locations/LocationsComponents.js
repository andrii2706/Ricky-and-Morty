import {useEffect, useState} from "react";
import LocationComponent from "./LocationComponent";
import '../../styles/Locations.css'
export default function LocationsComponents(){

    const [locations, setLocations]=useState([])
    const [info, setInfo]=useState({})
    const url = 'https://rickandmortyapi.com/api/location'

    const fetchLoactions = (url) =>{
        fetch(url)
            .then((response)=>response.json())
            .then((data)=>{
                setLocations(data.results)
                setInfo(data.info)
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    const handleNextPage = () =>{
        fetchLoactions(info.next);
        window.scrollTo(0,0);
    }
    const handlePreviousPage = ()=>{
        fetchLoactions(info.prev);
        window.scrollTo(0,0);
    }
    useEffect(()=>{
        fetchLoactions(url)
    },[])

    return(
<div>
    <div className="pagination">
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
    </div>
    <div className="location-flex-direction">
        {
            locations.map(value => <LocationComponent item={value}/>)
        }
    </div>
</div>
)}
