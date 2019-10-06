import React from 'react';

const Footer = () => {
	return (
		<div id='footer'>
			<div id='footer-left'>
				<img src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>
				<h3>About Us</h3>
				<ul>
					<li>How are why</li>
					<li>What we do</li>
					<li>Privacy</li>
					<li>Terms & Condition</li>
				</ul>
			</div>
			<div id='footer-right'>
				<h3>Contact Us</h3>
				
				<ul className='footer-social'>
					<li><i className="lni-facebook-filled"></i></li>
					<li><i className="lni-instagram-filled"></i></li>
					<li><i className="lni-linkedin-filled"></i></li>
				</ul>
				
				<ul>
					<li>Where we are</li>
					<li>Our Contact</li>
					<li>News</li>
				</ul>
				<ul>
					<li>ouremail@email.com</li>
					<li>987 654321</li>
				</ul>
			</div>
			<div className='clearfix'></div>
		</div>
	)
}

export default Footer