import { Task } from '../../Types/TaskType';
import * as C from './styles'

type Props = {
    item: Task;
    clickDel: (id: string) => void;
    clickComplete: (id: string, complete: boolean) => void;
}

export const ItemTask = ({ item, clickDel, clickComplete}: Props) => {

    const handleCompleteTask = (id: string, complete: boolean) => {
        clickComplete(id, complete)
    }

    const handleDelTask = (id: string) => {
        clickDel(id)
    }
    
    return (
        <C.Container>
            <C.Item>
                {!item.complete &&
                // <input type="checkbox"  />
                <C.NotCheck onClick={() => handleCompleteTask(item.id, item.complete)}>
                    <div></div>
                </C.NotCheck>
                }
                {item.complete &&
                <C.Check onClick={() => handleCompleteTask(item.id, item.complete)}>
                    <div></div>
                </C.Check>

                // <input type="checkbox" checked onChange={() => handleCompleteTask(item.id, item.complete)} />
                }
                <C.Task>{item.task}</C.Task>
                <C.Del onClick={() => handleDelTask(item.id)}>Apagar</C.Del>
            </C.Item>
        </C.Container>
    );
}