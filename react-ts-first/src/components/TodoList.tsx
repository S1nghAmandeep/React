import { Todo } from "../ts_modal/todoModal";
import './TodoList.css';
interface TodoListProps {
    items: Todo[];
    onDeleteTodo: (todoId: string) => void;
}

function TodoList(props: TodoListProps) {

    return (
        <>
            <ul>
                {props.items.map(todo =>
                    <li key={todo.id}>
                        <span>
                            {todo.text}
                        </span>
                        <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </>

    );
}

export default TodoList;