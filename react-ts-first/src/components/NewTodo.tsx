import { useRef } from "react";
import './NewTodo.css';

interface NewTodoProps {
    onAddTodo: (text: string) => void;
}

const NewTodo = (props: NewTodoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSumbitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const entredText = textInputRef.current!.value;
        if (entredText.trim().length > 4) {
            props.onAddTodo(entredText);
            textInputRef.current!.value = '';
        }

    }

    return (
        <form onSubmit={todoSumbitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input ref={textInputRef} id="todo-text" type="text" />
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodo;