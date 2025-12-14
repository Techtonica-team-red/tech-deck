import React from 'react'

const FlashCard = ({ card }) => {
  return (
    <div>
      {card.question}
      {card.answer}
    </div>
  )
}

export default FlashCard
