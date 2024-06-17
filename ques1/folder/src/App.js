import './App.css';
import {useState, useEffect} from 'react';

// You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card Use this API: https://jsonplaceholder.typicode.com/posts

// Hint: Create a state for the data which will be fetched using the Json Placeholder API Inside useEffect, use fetch to populate that state and then use map to render the cards from that state.

function App() {

const [cards, setCards] = useState([]);

const fetchData = async () => {
  let a = await fetch('https://jsonplaceholder.typicode.com/posts')
  let data = await a.json()
  setCards(data)
  console.log(data)
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <>
    <div className="container">
      {cards.map(item => {
        return(<div className='card' key={item.Id}>
          
          <h2>{item.title}</h2>
          <span> "UserId: "{item.userId}</span>
          <p>{item.body}</p>
        
        </div>)
      })}
    </div>
    </>
  );
}

export default App;
