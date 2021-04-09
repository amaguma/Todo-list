import { FC, useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ITask from './interfaces';

const App: FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]') as ITask[]
    setTasks(saved);
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addHandler = (title: string) => {
    const newTask: ITask = {
      title: title,
      id: Date.now(),
      isComplete: false
    }
    setTasks(prev => [newTask, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    }));
  }

  const deleteHandler = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }


  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoInput onAdd={addHandler} />
      <TodoList tasks={tasks} onToggle={toggleHandler} onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
