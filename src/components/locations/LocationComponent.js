export default function LocationComponent({item}){
return(
<div className="locations-component">
    <h2>{item.name}</h2>
    <h3>{item.type}</h3>
    <h4>{item.dimension}</h4>
</div>
)}
