import {useState} from 'react'
import {nanoid} from "nanoid"


const Create = (props) => {
    const tasks = props.tasks;
    const settasks = props.settasks;
    const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [contact,setcontact] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();
        const newtodo = { id: nanoid() ,name,email,contact};
        console.log(newtodo);

        settasks([...tasks, newtodo]);
        setname("");
        setcontact("");
        setemail("");
        localStorage.setItem("tsk", JSON.stringify([...tasks, newtodo]));
  }
  return (
    <div>
    <form onSubmit={submitHandler}>
    <input type='text' placeholder='Enter Name' onChange={(e) => setname(e.target.value)}
    value={name}/>
    <input type='text' placeholder='Enter Contact' onChange={(e) => setcontact(e.target.value)}
    value={contact} />
    <input type='email' placeholder='Enter Email' onChange={(e) => setemail(e.target.value)}
    value={email} />
    <button>Submit</button>
    
</form>
    </div>
  )
}

export default Create
