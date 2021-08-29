import {useEffect, useState} from "react";
import {getInfoOf} from "../../api/API";
import DetailInfo from "./DetailInfo";

export default function CharacterInfo({id}){

 const [charInfo, setcharInfo] = useState([]);
 useEffect(()=>{
     getInfoOf(id).then(value => setcharInfo([value.data]))
 },[])
    return(
<div>
    {
        charInfo.map(value => <DetailInfo item={value}/>)
    }
</div>
)}
