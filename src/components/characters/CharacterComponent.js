import "../../styles/Characters.css"
import {BrowserRouter, Link} from "react-router-dom";

export default function CharacterComponent({item}) {
    return (
        <BrowserRouter>
            <div className="card">
                <div className="info">
                    <img src={item.image} alt="characters" className="image"/>
                    <h2>{item.name}</h2>
                    <h3>Status- {item.status}</h3>
                    <h4>Gender - {item.gender}</h4>
                    <h4>Species - {item.species}</h4></div>
            </div>
        </BrowserRouter>
    )
}
