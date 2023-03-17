import { useEffect, useRef } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { ItemTask } from "./components/ItemTask";
import { useTasks } from "./reducers/useTasks";

import * as C from './stylesApp'

const App = () => {
  const [list, dispatch] = useTasks()

  const handleAddTask = (task: string) => {
    if (task) {
      dispatch({
      type: 'ADD',
      payload: {
          task
      }
      })

      dispatch({
        type: 'ORDER'
      })
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

    dispatch({
      type: 'ORDER'
    })
  }

  return (
    <C.Container>
      <Header />
      
      <AddTask clickFn={handleAddTask} />

      <C.List>
        <C.ListTitle>Tarefas de hoje</C.ListTitle>
        {list.map((item, index) => (
          <ItemTask key={index} item={item} clickDel={handleDelTask} clickComplete={handleCompleteTask} />
        ))}
      </C.List>
    </C.Container>
  );
}

export default App;