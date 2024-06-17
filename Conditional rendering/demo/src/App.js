import './App.css';
import {useState} from 'react';
function App() {

  // const [count, setcount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);

  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good Todo"
    },
    {
      title: "Hey I am another Todo",
      desc: "I am also good Todo"
    },
    {
      title: "Hey I am grocery Todo",
      desc: "I am good grocery Todo"
    }
  ])
  
//   const Todo = ({todo})=>{
//     return( 
//       <>
//       <div style={{border: "2px solid black", margin: "40px"}}>
//       <div className="todo">{todo.title}</div>;
//       <div className="todo">{todo.desc}</div>
//       </div>
//     </>
//     )                                
// }

  return (
    <div className="App">
  
     {/* Rendering CASE1 : WHEN WE HAVE TO USE IF ELSE:  */}
     {showbtn?<button>showbtn is true</button>:<button>showbtn is false</button>}


     {/* Rendering CASE2: WHEN WE HAVE TO USE IF ONLY */}
     {/* {showbtn && <button>showbtn is true</button>} */}
    

     <button onClick={()=>setshowbtn(!showbtn)}>Toggel</button>


    {/* CASE3: LIST RENDERING */}
    {todos.map(todo => {
      // return(<Todo key={todo.title} todo = {todo}/>)                                    
    return(<div key={todo.title} style={{border: "2px solid black" , width: "400px", margin: "5px", textAlign: "center"}}>
      <div className="todo">{todo.title}</div> 
      <div className="todo">{todo.desc}</div> 
      </div>
    )
    })}
    
  </div>
  );
}

export default App;
