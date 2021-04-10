import { FC } from 'react'
import { ITask, Button } from '../interfaces'

interface TodoMenuProps {
    tasks: ITask[];
    btns: Button[];
    onClick(id: number): void;
}
   
const TodoMenu: FC<TodoMenuProps> = ({tasks, btns, onClick}) => {   
    return(
        <>
            <div className="menu">
                <span>Tasks: {tasks.length}</span>
                <ul className="navigation">
                    {btns.map(btn => {
                        return(
                            <li key={btn.id}><a onClick={onClick.bind(null, btn.id)} href={'#' + btn.content} className={btn.active ? "active" : ""}>{btn.content}</a></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default TodoMenu;