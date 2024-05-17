import React from 'react'

const Show = (props) => {
  const tasks = props.tasks;
  const settasks = props.settasks;
  const deleteHandler = (id) => {
    settasks(tasks.filter((t) => t.id != id))
    localStorage.setItem("tsk", JSON.stringify(tasks.filter((t) => t.id != id)))
  }

  return (

    <div>
      {tasks.length > 0 ? tasks.map((task, index) => {
        return <div key={task.id}>
          <h4>Name = {task.name} </h4>
          <h4>Email = {task.email} </h4>
          <h4>Contact = {task.contact} </h4>
          <button onClick={() => { deleteHandler(task.id) }}>Delete</button>
        </div>
      }) : (
        <h1 className="mt-10 w-full text-center text-orange-600 text-3xl">
          No Pending Tasks
        </h1>
      )}
    </div>

  )
}

export default Show
