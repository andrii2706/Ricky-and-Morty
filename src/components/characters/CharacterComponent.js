import "../../styles/Characters.css"
export default function CharacterComponent({item}){
return(
<div className="card">
    <img src={item.image} alt="characters" className="image"/>
    <h2>{item.name}</h2>
    <h3>Status- {item.status}</h3>
    <h4>Gender - {item.gender}</h4>
    <h4>Species - {item.gender}</h4>
</div>
)}
