import React from 'react'
import SocialLink from './SocialLink'

const HeroContent = () => {
	return (
		<div className='heroContent'>
			<div className='heroContent-images'>
				<img src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>	
			</div>

			<SocialLink/>

			<div className='clearfix'></div>
		</div>
	)
}

export default HeroContent