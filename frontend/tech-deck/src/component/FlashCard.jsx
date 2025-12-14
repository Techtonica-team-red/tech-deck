import React from 'react'
import { useState } from 'react'

const FlashCard = ({ card, flipped, setFlipped }) => {
  

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
            <p>{card.difficulty}</p>
            <p>{card.tag}</p>
          </div>
        </div>
      
    </div>
  )
}

export default FlashCard
