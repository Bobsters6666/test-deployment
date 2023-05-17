import '../leaderboard.css';

const onerepmaxDetails = ({ onerepmax, index }) => {

  const handleClick = async () => {
    const response = await fetch('/api/' + onerepmax._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      console.log(json)
    }
  }
  
  return (
    <div className="onerepmax-details">
      <p><strong>#{index + 1}</strong></p>
      <p>{onerepmax.username}</p>
      <p>{onerepmax.lift}</p>
      <p>{onerepmax.weight}</p>
      <p>{onerepmax.reps}</p>
      <p><strong>{onerepmax.max}</strong></p>
      <span onClick={handleClick}>Delete</span>
    </div>
  )
}

export default onerepmaxDetails