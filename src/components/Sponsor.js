import React from 'react'

const sponsors = [
	'https://www.wonkypeach.com/wp-content/uploads/2017/11/24169362_1413578255428529_1371695503_o.jpg',
	'https://www.wonkypeach.com/wp-content/uploads/2017/11/24167221_1413578262095195_1941316237_o.jpg',
	'https://www.wonkypeach.com/wp-content/uploads/2017/11/24167357_1413578258761862_1515427379_o.jpg',
	'https://i.pinimg.com/originals/42/25/13/4225134c321df29f7a9b0c82be5bb79f.jpg'
]



const Sponsor = () => {
	let image = React.createRef();

	// the following function is attribuited always to the last image fix this error
	const enlarge = () => {
		console.log(image.current.src)
		image.current.classList.add('clicked');
	}

	return (
		<div id='sponsor'>
			<h2>Our Sponsor</h2>
			{sponsors.map(sponsor => {
				return <img className='sponsor-images' alt='sponsor' src={sponsor} ref={image} onClick={enlarge}/>	
			})}
			
			
		</div>
	)
}

export default Sponsor

