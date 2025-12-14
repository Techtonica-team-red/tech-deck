import { useEffect, useState } from 'react';
import './App.css';
import FlashCard from './component/FlashCard.jsx';
import CardButton from './component/CardButton.jsx';

function App() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // If first card, prev = last card
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  }

  // If last card, next = first card
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <>
      <div>
        <FlashCard 
          card={cards[currentIndex]}
        />

        <CardButton 
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
      
    </>
  )
}

export default App
