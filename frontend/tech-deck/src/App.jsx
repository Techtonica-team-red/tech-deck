import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './Flashcard.jsx'

useEffect(() => {
    fetch("http://localhost:8080/api/cards")
      .then((res) => res.json())
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flashcard />
    </>
  )
}

export default App
