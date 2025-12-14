import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './Flashcard.jsx'

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

      fetchCards()
    }, []})
  return (
    <>
      {cards.map((cards) => (
        <Flashcard
          key={cards.id}
          question={cards.question}
          answer={cards.answer}
          category={cards.category}
          difficulty={cards.difficulty}
        />
      ))}
    </>
  )
}

export default App
