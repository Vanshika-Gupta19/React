import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';

function App() {

  const[count, setCount] = useState(0);
  // let a = 0;
  const a = useRef(0)
  const btnref = useRef()

  useEffect(() => {
    // a = a + 1;
    a.current = a.current + 1;
    console.log(`rerendering and the value of a is ${a.current}...`)
    btnref.current.style.backgroundColor = "skyblue"
  })
  

  return (
    <>
    <div className="App">
      <header className="App-header">

      <button ref={btnref} onClick = {() => setCount((count)=> count+1)}> count is {count} </button>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
