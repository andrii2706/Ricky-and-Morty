import {useEffect, useState} from "react";
import View from "./View";
import '../../styles/ToDoList.css'

const getDatafromLS = () => {
    const data = localStorage.getItem('list');
    if (data) {
        return JSON.parse(data);
    } else {
        return []
    }
}

export default function MyWatchListComponent() {
    const [lists, setList] = useState(getDatafromLS());

    const [episode, setEpisode] = useState('');
    const [numb, setNumb] = useState('')

    const hadleAddToDoListSubmit = (e) => {
        e.preventDefault();
        let listsOfEpisodse = {
            episode,
            numb
        }
        setList([...lists, listsOfEpisodse]);
        setEpisode('');
        setNumb('')
    }
    const deletItemFromList = (numb) => {
        const filteredList = lists.filter((element, index) => {
            return element.numb !== numb
        })
        setList(filteredList)
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(lists))
    }, [lists])
    return (
        <div>
            <div className="header-todo">
                <h1>What I need to watch</h1>
            </div>
            <div className="form-direction">
                <form autoComplete="off" className="form" onSubmit={hadleAddToDoListSubmit}>
                    <label>Number</label>
                    <input type="number" required onChange={(e) => setNumb(e.target.value)} value={numb}/>
                    <br/>
                    <label>Episode Name </label>
                    <input type="text" required onChange={(e) => setEpisode(e.target.value)} value={episode}/>
                    <button type="submit" className="button">Add</button>
                </form>
            </div>
            <div className="center">
                {
                    lists.length > 0 &&
                    <div className="list-info">
                        <table>
                            <thead>
                            <th>Number</th>
                            <th>Episode Name</th>
                            </thead>
                            <tbody>
                            {
                                lists.map(value => <View item={value} deleteList={deletItemFromList}/>)
                            }
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        </div>
    )
}
