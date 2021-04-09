import { FC, useState, ChangeEvent, KeyboardEvent } from 'react'

interface TodoInputProps {
    onAdd(title: string): void
}


const TodoInput: FC<TodoInputProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title);
            setTitle('');
        }
    }

    const clickHandler = () => {
        if (title.length !== 0) {
            onAdd(title);
            setTitle('');
        }
    }

    return (
        <div className="input">
            <input 
                onChange={changeHandler} 
                value={title}
                onKeyPress={keyPressHandler}  
                type="text" 
                placeholder="Enter the name"
            />
            <button className="btn" onClick={clickHandler}>add</button>
        </div>
    )
}

export default TodoInput;