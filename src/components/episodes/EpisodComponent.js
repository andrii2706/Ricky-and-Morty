export default function EpisodComponent({item}){
return(
<div className="episode-card">
    <h2>Name of episode - {item.name}</h2>
    <h3>Release Date - {item.air_date}</h3>
    <h3>Episode - {item.url}</h3>
</div>
)}
