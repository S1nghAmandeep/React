import React from "react";

export default function NewTask({addNewTask}) {
    const [newTask, setNewTask] = React.useState("");

    function handleChange(e) {
        setNewTask(e.target.value);
    }

    function handleClick() {
        if(newTask.trim() === "") return;
        addNewTask(newTask);
        setNewTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input onChange={handleChange} value={newTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}