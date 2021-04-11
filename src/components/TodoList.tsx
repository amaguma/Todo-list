import { FC } from 'react'
import { ITask } from '../interfaces';

interface TodoListProps {
    tasks: ITask[];
    onToggle(id: number): void;
    onDelete(id: number): void;
}

const TodoList: FC<TodoListProps> = ({tasks, onToggle, onDelete}) => {
    return(
        <>
            <ul className="list">
                {tasks.map(task => {
                    const classElem = ['task'];
                    if (task.isComplete) {
                        classElem.push('completed');
                        // task.dateCompleted = new Date();
                        // console.log('old' + task.dateCompleted!)
                        // if (task.dateCompleted === undefined) {
                        //     console.log(task.title);
                        //     task.dateCompleted = new Date();
                        // } 
                    }
                    return (
                        <li className={classElem.join(' ')} key={task.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={task.isComplete}
                                onChange={() => onToggle(task.id)}
                            />
                            <span>{task.title}</span>
                            <button className="btn-delete btn-floating btn-large waves-effect waves-light delete" onClick={() => onDelete(task.id)}>X</button>
                        </label>
                    </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList;