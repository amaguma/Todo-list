import { FC } from 'react'
import { ITask } from '../interfaces';

interface TodoListProps {
    tasks: ITask[];
    onToggle(id: number): void;
    onDelete(id: number): void;
}

const TodoList: FC<TodoListProps> = ({tasks, onToggle, onDelete}) => {
    return(
        <div>
            <ul>
                {tasks.map(task => {
                    const classElem = ['task'];
                    if (task.isComplete) {
                        classElem.push('completed');
                    }
                    return (
                        <li className={classElem.join(' ')} key={task.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={task.isComplete}
                                onChange={onToggle.bind(null, task.id)}
                            />
                            <span>{task.title}</span>
                            <button className="btn-delete btn-floating btn-large waves-effect waves-light delete" onClick={onDelete.bind(null, task.id)}>X</button>
                        </label>
                    </li>
                    )
                })}
            
            </ul>
        </div>
    )
}

export default TodoList;