import React from 'react'
import SocialLink from './SocialLink'
import HeroImage from './HeroImage'



const HeroContent = () => {
	return (
		<div className='heroContent'>
			<HeroImage/>			

			<SocialLink/>
			
			<div className='clearfix'></div>
		</div>
	)
}

export default HeroContent
