import React from 'react'

const HeroContent = () => {
	return (
		<div className='heroContent'>
			<div className='heroContent-images'>
				<img src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>	
			</div>

			<nav className='heroContent-social'>
				<ul>
					<li><i className="lni-facebook-filled"></i></li>
					<li><i className="lni-instagram-filled"></i></li>
					<li><i className="lni-linkedin-filled"></i></li>
				</ul>
			</nav>	

			<div className='clearfix'></div>
		</div>
	)
}

export default HeroContent