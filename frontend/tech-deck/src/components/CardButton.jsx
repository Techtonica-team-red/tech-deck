import React from 'react'

const CardButton = ({ onPrev, onNext }) => {
  return (
    <div>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default CardButton
