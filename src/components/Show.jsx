import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

const Show = (props) => {
  const [checked, setChecked] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null); // State to track the task being edited
  const [editedTaskName, setEditedTaskName] = useState(""); // State for edited task name

  const tasks = props.tasks;
  const settasks = props.settasks;

  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((t) => t.id !== id);
    settasks(updatedTasks);
    localStorage.setItem("tsk", JSON.stringify(updatedTasks));
  };

  const editHandler = (id, currentName) => {
    setEditingTaskId(id); // Set the ID of the task being edited
    setEditedTaskName(currentName); // Initialize the input with the current task name
  };

  const saveEditHandler = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: editedTaskName } : task
    );
    settasks(updatedTasks);
    localStorage.setItem("tsk", JSON.stringify(updatedTasks));
    setEditingTaskId(null); // Reset the editing state
  };

  return (
    <div className="w-[50vw] mt-5">
      <div className="flex flex-col items-center justify-center h-[40vh] overflow-y-auto border rounded-md">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className={
                checked
                  ? "w-[70%] h-[10vh] flex gap-10 m-2 items-center justify-between  border-black-300 px-3 bg-green-300 rounded-md"
                  : "w-[70%] h-[10vh] flex gap-10 m-2 items-center justify-between px-3 bg-orange-300 border-black-300 rounded-md"
              }
            >
              <div className="w-full flex gap-3 items-center">
                <form>
                  <input
                    type="checkbox"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                </form>
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editedTaskName}
                    onChange={(e) => setEditedTaskName(e.target.value)}
                    className="p-1 border rounded w-full"
                  />
                ) : (
                  <h4>{task.name}</h4>
                )}
              </div>
              <div className="flex gap-3 items-center">
                {editingTaskId === task.id ? (
                  <button
                    onClick={() => saveEditHandler(task.id)}
                    className="text-xl font-bold"
                  >
                    <IoIosAdd />
                  </button>
                ) : (
                  <button
                    onClick={() => editHandler(task.id, task.name)}
                    className="text-xl font-bold"
                  >
                    <MdEdit />
                  </button>
                )}
                <button
                  onClick={() => deleteHandler(task.id)}
                  className="text-2xl font-bold"
                >
                  <IoIosClose />
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-gray-500">No Pending Tasks</h1>
        )}
      </div>
    </div>
  );
};

export default Show;
