import React, { FC } from 'react'
import { ITask } from '../interfaces';

interface TodoTableProps {
    tasks: ITask[]
}

const TodoTable: FC<TodoTableProps> = ({tasks}) => {

    let quantitys = [...Array(7)].map(() => 0);
    quantitys = quantitys.map((elem, index) => {
        elem = tasks.filter(task => task.dataCompleted!.getDay() === index).length
        return elem;
    });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {quantitys.map((quantity, index) => {
                            return(
                                <td key={index}>{quantity}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TodoTable;