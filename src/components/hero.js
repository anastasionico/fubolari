import React, { Component } from 'react'

class Hero extends Component {

	constructor() {
		super()
		this.state = { username:"Login" }
		
	}

	changeUsername() {
		this.setState({
			username:"Nico"
		})	
	}
	

	render () {	
		return (
			<div id="hero">
				<div className='nav'>
					<nav className='nav-pages'>
						<img className='nav-pages-logo' src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>	
						<ul>
							<li>News</li>
							<li>Subscribe</li>
							<li>Courses</li>
							<li>Contact</li>
						</ul>
					</nav>
					
					<nav className='nav-auth'>
						<ul>
							<li>
								<button className='btn btn-primary' onClick = {() => this.changeUsername()}>
									{this.state.username}
								</button>
							</li>
							<li>Register</li>
						</ul>
					</nav>
					
					<form className='form-seach'>
						<div className='form-seach-icon circle'>
							<i class="lni-search size-sm"></i>
						</div>
						<input className='form-seach-text' type="text" name='search'/>
					</form>
				</div>	
				<div className='heroContent'>
					<div className='heroContent-images'>
						<img src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>	
					</div>

					<nav className='heroContent-social'>
						<ul>
							<li><i class="lni-facebook-filled"></i></li>
							<li><i class="lni-instagram-filled"></i></li>
							<li><i class="lni-linkedin-filled"></i></li>
						</ul>
					</nav>	
				</div>
				

			</div>	
		)
	}
}

export default Hero