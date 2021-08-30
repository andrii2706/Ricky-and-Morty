import {useEffect, useState} from "react";
import EpisodComponent from "./EpisodComponent";
import '../../styles/Episodes.css'

export default function EpisodesComponents() {
    const [episodes, setEpisodes] = useState([])
    const [info, setInfo] = useState({})
    const url = 'https://rickandmortyapi.com/api/episode'

    const fetchEpisodes = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setEpisodes(data.results);
                setInfo(data.info);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const handleNextPage = () => {
        fetchEpisodes(info.next);
        window.scrollTo(0, 0);
    };
    const handlePreviousPage = () => {
        fetchEpisodes(info.prev);
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        fetchEpisodes(url);
    }, [])

    return (
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
            <div className="block-of-episodes">
                {
                    episodes.map(value => <EpisodComponent item={value}/>)
                }
            </div>
        </div>
    );
}
