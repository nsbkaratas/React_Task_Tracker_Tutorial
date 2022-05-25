import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState} from 'react'

function App() {
  const [ tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: ' Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'school meeting',
        day: ' Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: ' Feb 7th',
        reminder: false,
    }   
])

//Delete task
const deleteTask= (id)=>{
  console.log('delete',id)

}
  return (
    <div className="container">
      <Header />
      <Tasks tasks ={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
