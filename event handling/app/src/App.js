import {useState} from 'react';
import './App.css';

function App() {
  const handleClick = ()=>{
    alert("button is clicked!")
  }

  const [name, setName] = useState(0)

  const [form, setForm] = useState({email: "", phone: ""})

  //standard practice for input:
  const handleChange = (e)=>{
  //  setName( e.target.value);
  setForm({...form, [e.target.name]:e.target.value})
  console.log(form)
  }

  return (
    <>
    <div className="btn">
      
      <button onClick = {handleClick}>Click</button>

      {/* special case : input (in this we have to do onchange and there is a role of state as well) */}
      <input type="text" value={name} onChange={handleChange} />

      {/* another example: */}
      <input type="text" name='email' value={form.email} onChange={handleChange}/>
      {/* <input type="text" name='email' value={form.email ? form.email : " "} onChange={handleChange}/> */}
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />

    </div>
    </>
  );
}

export default App;
