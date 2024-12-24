import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

function Title(props) {
  return (
  <h1>Todo List App</h1>
  )
}


function Item(props) {
  const color = props.done ? 'lightgreen' : 'lightgrey';
  return (
    <div style = {{backgroundColor: color, width: '500px', height: '100px'}} onClick = {props.handleDone}>
    <h3> 
    {props.title}
    </h3>
    <p> 
    {props.description}
    </p>
    <p>
    {props.deadline}
    </p>
  </div>
  );
}


const TASKS = [
  {title: "Laundry", description: "Wash clothes", deadline: "Tomorrow", done: false},
  {title: "Grocery", description: "Buy food", deadline: "Today", done: false},
  {title: "Study", description: "Study for exam", deadline: "Today", done: false},
]


function App() {

  const [mode, setMode] = useState('light');
  const [tasks, setTasks] = useState(TASKS);
  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  }

  const switchMode = () => {
      if (mode === 'light') {
        setMode('dark');
      } else if (mode === 'dark') {  
        setMode('light');
      }
    } 

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  const backgroundColor = mode === 'light' ? 'white' : 'darkgrey';
  const textColor = mode === 'light' ? 'black' : 'white';

  return (
    <div style={{backgroundColor: backgroundColor, color: textColor}}>
    <Title/>
    <h2>My tasks for today</h2>
    <button onClick = {switchMode}>Dark mode</button>
    <ul>
      {tasks.map((task, index) => {
        return (
          <Item title={task.title} description={task.description} deadline={task.deadline} done={task.done} handleDone={() => handleDone(index)} />  
        )
      })}
    </ul>
    </div> 
  );
}

export default App;
