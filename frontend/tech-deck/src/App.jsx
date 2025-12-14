import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashCard from './component/FlashCard.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [card, setCard] = useState([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cards');
        const data = await response.json();
        console.log("API data:", data);
        setCard(data);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchCards();
  },[])

  return (
    <>
      <div>
        {card.map((singleCard) => (
              <FlashCard 
                key={singleCard.id} 
                card={singleCard} 
              />
        ))}
      </div>
      
    </>
  )
}

export default App
