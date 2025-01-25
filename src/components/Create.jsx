import { useState } from 'react'
import { nanoid } from "nanoid"
import { IoIosAdd } from "react-icons/io";


const Create = (props) => {
  const tasks = props.tasks;
  const settasks = props.settasks;
  const [name, setname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = { id: nanoid(), name};
    console.log(newtodo);

    settasks([...tasks, newtodo]);
    setname("");
    localStorage.setItem("tsk", JSON.stringify([...tasks, newtodo]));
  }
  return (
    <div>
      <form onSubmit={submitHandler} className='w-[30vw] flex border-black border-[1px] rounded'>
        <input className='w-[28vw] border rounded outline-none p-3' type='text' placeholder='Enter Name' required onChange={(e) => setname(e.target.value)}
          value={name} />
        <button className='text-2xl  font-bold' ><IoIosAdd /></button>

      </form>
    </div>
  )
}

export default Create
