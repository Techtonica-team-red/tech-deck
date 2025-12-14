import React from 'react'

const DeleteButton = ({ card,onDelete }) => {
  return (
    <div>
      <button onClick={()=>onDelete(card.id)}>
        Delete
      </button>
    </div>
  )
}

export default DeleteButton
