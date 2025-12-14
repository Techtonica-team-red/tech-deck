import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlashCard from './component/FlashCard.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cards');
        const data = await response.json();
        console.log("API data:", data);
        setCards(data);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchCards();
  },[])

  return (
    <>
      <div>
        {cards.map((card) => (
              <FlashCard 
                key={card.id} 
                card={card} 
              />
        ))}
      </div>
      
    </>
  )
}

export default App
