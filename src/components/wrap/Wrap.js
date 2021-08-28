import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import HomeComponent from "../home/HomeComponent";
import EpisodComponent from "../episodes/EpisodComponent";
import LocationComponent from "../locations/LocationComponent";
import CharactesComponent from "../characters/CharactesComponent";
import MyWatchListComponent from "../my-watch-list/MyWatchListComponent";

import '../../styles/Wrap.css'

export default function Wrap(){
return(
    <BrowserRouter>
        <div className="wrap">
            <div className="logo"><img src="" alt="Logo"/></div>
            <div className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/episodes'}>Episodes</Link>
                <Link to={'/locations'}>Locations</Link>
                <Link to={'/characters'}>Characters</Link>
                <Link to={'/my-watch-list'}>My watch list</Link>
            </div>
            <div className="user-info">
                <h3>User - Andrii Paslavskiy</h3>
                <a href="https://github.com/andrii2706">To my GitHub</a>
                            </div>
        </div>
        <div>
            <Switch>
                <Route exact path={'/'} component={HomeComponent}/>
                <Route path={'/episodes'} component={EpisodComponent}/>
                <Route path={'/locations'} component={LocationComponent}/>
                <Route path={'/characters'} component={CharactesComponent}/>
                <Route path={'/my-watch-list'} component={MyWatchListComponent}/>
            </Switch>
        </div>
    </BrowserRouter>
)}
