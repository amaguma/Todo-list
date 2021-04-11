import React, { FC } from 'react'
import { ITask } from '../interfaces';

interface TodoTableProps {
    tasks: ITask[]
}

const TodoTable: FC<TodoTableProps> = ({tasks}) => {
    function getWeekNumber(date: Date): number {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        newDate.setDate(newDate.getDate() + 3 - (newDate.getDay() + 6) % 7);
        const week1 = new Date(newDate.getFullYear(), 0, 4);
        return 1 + Math.round(((newDate.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    const quantity = [...Array(7)]
        .map(() => 0)
        .map((elem, index) => {
        elem = tasks
        .map(task => {
            if (task.dateCompleted) {
                return {
                    ...task,
                    dateCompleted: new Date(task.dateCompleted)
                }
            }
            return {
                ...task,
                dateCompleted: Date.now()
            }
        })
        .filter(task => new Date(task.dateCompleted).getDay() === index && getWeekNumber(new Date(task.dateCompleted)) === getWeekNumber(new Date())).length
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
                        {quantity.map((quantity, index) => {
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