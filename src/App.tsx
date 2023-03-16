import { ChangeEvent, useEffect, useState } from "react";
import { getCurrentDate } from "./helpers/dateManipulation";
import { useTasks } from "./reducers/useTasks";

const App = () => {
  const [task, setTask] = useState('')
  const [list, dispatch] = useTasks()
  const date = getCurrentDate()

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  useEffect(() => {
    dispatch({
      type: 'ORDER'
    })
  }, [list])
  const handleAddTask = () => {
    if (task) {
      dispatch({
        type: 'ADD',
        payload: {
          task
        }
      })
      setTask('')
    }
  }

  const handleDelTask = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: {
        id
      }
    })
  }

  const handleCompleteTask = (id: string, complete: boolean) => {
    dispatch({
      type: "COMPLETE",
      payload: {
        id,
        complete
      }
    })
  }
  
  return (
    <div>
      <p>{date}</p>
      adicionar na lista
      <input
        type="text"
        placeholder="Tarefa..."
        value={task}
        onChange={handleTaskChange}
      />
      <button onClick={handleAddTask}>Adicionar</button>
      
      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {!item.complete &&
              // <input type="checkbox"  />
              <div onClick={() => handleCompleteTask(item.id, item.complete)}>
                [ ]
              </div>
            }
            {item.complete &&
              <div onClick={() => handleCompleteTask(item.id, item.complete)}>
                [x]
              </div>

              // <input type="checkbox" checked onChange={() => handleCompleteTask(item.id, item.complete)} />
            }
            {item.task}
            <button onClick={() => handleDelTask(item.id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;