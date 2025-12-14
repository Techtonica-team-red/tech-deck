import { useEffect, useState } from 'react';
import './App.css';
import FlashCard from './components/FlashCard';
import CardButton from './components/CardButton.jsx';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

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
    // Only fetch once
  },[])

  // If first card, prev = last card
  const handlePrev = () => {
    // Reset flipped
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  }

  // If last card, next = first card
  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <>
      <div>
        {/* We used async function to fetch data, but card was set to empty, index set to 0 before data fetched
        This will result nothing returned. */}
        {cards.length>0?
        (
          <>
            <FlashCard 
              card={cards[currentIndex]}
              flipped={flipped}
              setFlipped={setFlipped}
            />

            <CardButton 
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </>
        ) : (
          <p>Loading cards...</p>
        )
      }
      </div>
      
    </>
  )
}

export default App
