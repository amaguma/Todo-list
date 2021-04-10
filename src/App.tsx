import { FC, useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {ITask, Button } from './interfaces';
import data from './components/data/data.json'
import TodoMenu from './components/TodoMenu'

const buttons: Button[] = [
  {
      id: 1,
      content: "All",
      active: true
  },
  {
      id: 2,
      content: "Completed",
      active: false
  },
  {
      id: 3,
      content: "Active",
      active: false
  }
]

const App: FC = () => {

  const [tasks, setTasks] = useState<ITask[]>(data);
  const [btns, setBtns] = useState<Button[]>(buttons);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[];
    setTasks(savedTasks); 
    const savedBtn = JSON.parse(localStorage.getItem('btns') || '[]') as Button[];
    setBtns(savedBtn); 
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('btns', JSON.stringify(btns))
  }, [btns]);

  const addHandler = (title: string) => {
    const newTask: ITask = {
      title: title,
      id: Date.now(),
      isComplete: false
    }
    setTasks(prev => [newTask, ...prev]);
  }

  const toggleHandler = (id: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task;
    }));
  }

  const deleteHandler = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  const clickHandler = (id: number) => {
    setBtns(prev => prev.map(btn => {
        if (btn.id === id) {
            btn.active = true;
        } else {
            btn.active = false;
        }
        return btn;
    }));
  }

  // const getElem: ITask[] = (id: number) => {
  //     return tasks;
  // }

  function getTodoList(id: number): ITask[] {
    if (id === 1) {
      return tasks;
    } else if (id === 2) {
      return tasks.filter(task => task.isComplete === true);
    } else {
      return tasks.filter(task => task.isComplete === false);
    }
  }


  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoInput onAdd={addHandler} />
      {btns.map(list => {
        const classes = ['todoList']
        if (!list.active) {
          classes.push('display')
        }
        const todoList = getTodoList(list.id)
        return(
          <div id={list.content} key={list.id} className={classes.join(' ')}>
            <TodoMenu tasks={todoList} btns={btns} onClick={clickHandler} />
            <TodoList tasks={todoList} onToggle={toggleHandler} onDelete={deleteHandler}/>
          </div>
        )
      })}
     
    </div>
  );
}

export default App;
