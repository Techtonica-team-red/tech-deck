import { useEffect, useState } from 'react'
import './App.css'
import FlashCard from './component/FlashCard.jsx'

function App() {
  const [cards, setCards] = useState([])
  const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/cards`);
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
