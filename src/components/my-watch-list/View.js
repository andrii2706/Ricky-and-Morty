import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export default function View({item, deleteList}) {
    return (
        <div>
            <td>{item.numb}</td>
            <td>{item.episode}</td>
            <td onClick={() => deleteList(item.numb)}>
                <Icon icon={trash}/>
            </td>
        </div>
    );
}
