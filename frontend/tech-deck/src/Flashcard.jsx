

function Flashcard(props) {

  return (
    <div>
      <h2>{props.question}</h2>
      <p>{props.answer}</p>
      <span>{props.category}</span>
      <span>Difficult: {props.difficulty}</span>
    </div>
  )
}

export default Flashcard
