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
			<div>
				<div>
					<nav>
						<ul>
							<li>*Logo*</li>
							<li>News</li>
							<li>Subscribe</li>
							<li>Courses</li>
							<li>Contact</li>
						</ul>
					</nav>
					<nav>
						<ul>
							<li>
								<button onClick = {() => this.changeUsername()}>
									{this.state.username}
								</button>
							</li>
							<li>Register</li>
						</ul>
					</nav>
				</div>	
				<div>
					<div>
						<p>big picture here</p>
					</div>	
					<div>
						<ul>
							<li>Facebook</li>
							<li>Linkedin</li>
							<li>Instagram</li>
							<li>Mail us</li>
						</ul>
					</div>	
				</div>
				
			</div>	
		)
	}
}

export default Hero