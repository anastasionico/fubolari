import React from 'react'
import SocialLink from './SocialLink'

const backgroundImages = [
	'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
	'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg'

]
const firstBackground = {
	backgroundImage: `url(${backgroundImages[0]})`
}
const secondBackground = {
	backgroundImage: `url(${backgroundImages[1]})`
}

const HeroContent = () => {
	return (
		<div className='heroContent'>
			<div className='heroContent-imagesIndex'>
				<img src={backgroundImages[0]} />
				<img src={backgroundImages[1]} />
			</div>
			<div className='heroContent-imagesContainer'>
				<div className='heroContent-imagesContainer-background' style={firstBackground}></div>
				<div className='heroContent-imagesContainer-background' style={secondBackground}></div>
			</div>

			<SocialLink/>

			<div className='clearfix'></div>
		</div>
	)
}

export default HeroContent