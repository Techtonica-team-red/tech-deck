import React from 'react'

const CardButton = ({ onPrev, onNext, style }) => {
  return (
    <div>
      <button style={style} onClick={onPrev}>Prev</button>
      <button style={style} onClick={onNext}>Next</button>
    </div>
  )
}

export default CardButton
