import "../../styles/Characters.css"
import {BrowserRouter, Link, Route, Router, Switch} from "react-router-dom";
import CharacterInfo from "./CharacterInfo";


export default function CharacterComponent({item}) {
    return (
        <BrowserRouter>

            <div className="link">
                <Link to={"/" + item.id}>
                    <div className="card">
                        <div className="info">
                            <img src={item.image} alt="characters" className="image"/>
                            <h2>{item.name}</h2>
                            <h3>Status- {item.status}</h3>
                            <h4>Gender - {item.gender}</h4>
                            <h4>Species - {item.species}</h4></div>
                    </div>
                </Link></div>

            <div>
                <Switch>
                    <Route path={"/" + item.id} render={(props => {
                        return <CharacterInfo id={item.id}/>
                    })}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
