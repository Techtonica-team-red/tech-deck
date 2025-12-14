import React from 'react'
import { useState } from 'react'

const FlashCard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`flash-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}>
        <div className="flash-card-inner">
          <div className="card-front">
            <h3>{card.question}</h3>
          </div>

          <div className="card-back">
            <h3>{card.answer}</h3>
          </div>
        </div>
      
    </div>
  )
}

export default FlashCard
