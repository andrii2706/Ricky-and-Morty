import {useEffect, useState} from "react";
import {getInfoOf} from "../../api/API";
import DetailInfo from "./Detail-info";

export default function CharacterInfo({id}){
 const [charInfo, setcharInfo] = useState([]);
 useEffect(()=>{
     getInfoOf(id).then(value => setcharInfo([value.data]))
 },[])
    return(
<div>
    {
        charInfo && charInfo.map(value => <DetailInfo item={value}/>)
    }
</div>
)}
