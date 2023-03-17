import { ChangeEvent, useState } from 'react'
import { useTasks } from '../../reducers/useTasks'
import * as C from './styles'

type Props = {
    clickFn: (task: string) => void;
}

export const AddTask = ({ clickFn }: Props) => {
    const [task, setTask] = useState('')
    const [list, dispatch] = useTasks()

    const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const sendToApp = () => {
        clickFn(task)
        setTask('')
    }

    return (
        <C.Container>
            <C.Input
                type="text"
                placeholder="Nova Tarefa..."
                value={task}
                onChange={handleTaskChange}
            ></C.Input>
            <C.Button onClick={sendToApp}>Adicionar Tarefa</C.Button>
        </C.Container>
    );
}