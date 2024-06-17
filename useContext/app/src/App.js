import './App.css';
import Navbar from './component/Navbar';
import { useState } from 'react';
import { counterContext } from './context/context';

function App() {

   const[count, setCount] = useState(0)

  return (
    <>
   {/* <counterContext.Provider value={count}> */}

   <counterContext.Provider value={{count, setCount}}>
      <Navbar/>
      <button onClick={() => setCount((count)=> count+1)}>count is {count}</button>
    </counterContext.Provider>
  </>
  );
}

export default App;
