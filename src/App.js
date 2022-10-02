import { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  const [showAddTask, setShowAdd]= useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment' ,
            day: 'Feb 5th at 2:30pm',
            reminder: true ,
            
        },
        {
            id: 2,
            text: 'Meeting at School' ,
            day: 'Feb 6th at 1:30pm',
            reminder: true ,
            
        },
        {
            id: 3,
            text: 'Food Shopping' ,
            day:'Feb 5th at 8:30pm',
            reminder: true ,
            
        },
    ]
)

const addTask = (task)=> {
  const id = Math.floor(Math.random() * 1000) + 1
  const newText= {id, ...task}
  setTasks([...tasks, newText])
}
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))

}

const toggleReminder= (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder  } : task))
}
  return (
    <Router>
    <div className='container'>
      <Header onAdd={()=> setShowAdd(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
    {tasks.length > 0 ?<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> : 'no more tasks'}
    <Route path='/about' component={About} />
   
    
   
    <Footer />
      
      
    </div>
    </Router>
  )
}

export default App;
