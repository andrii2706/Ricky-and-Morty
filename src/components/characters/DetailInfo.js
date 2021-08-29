import '../../styles/DetailInfo.css'
import {useState} from "react";
export default function DetailInfo({item}){

return(
<div className="more-info">
    <h2>Detaild info</h2>
    <img src={item.image} alt={item.title} className="image"/>
    <h2>Character name - {item.name}</h2>
    <h3>Character status - {item.status}</h3>
    <h4>Character species - {item.species}</h4>
    <h5>Character gender - {item.gender}</h5>
    <p>Location where live character - {item.origin.name}</p>
    <p>{item.location.name}</p>
</div>
)}
