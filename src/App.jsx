import React, { useState } from 'react'
import Create from "./components/Create"
import Show from "./components/Show"




const App = () => {
 
  const [tasks,settasks] = useState(JSON.parse(localStorage.getItem("tsk")) || [])
  

  return (
    <div>
      <Create tasks = {tasks} settasks= {settasks}/>

      <Show tasks = {tasks} settasks= {settasks}/>


      
      

  
    </div>
  )
}

export default App
