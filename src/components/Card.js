import './Card.css'

const Card = ({ children }) => {
	return(
		<div className='card' style={{ width: 400, height: 600}}>
			{children}
		</div>
		)
}

export default Card 