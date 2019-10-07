import React, {Component} from 'react'

class Nav extends Component {
	constructor () {
		super()
		this.state = {
			username : 'login'
		}
	}

	changeUsername() {
		if (this.state.username == 'login') {
			this.setState({
				username : 'Nico'	
			})	
		} else {
			this.setState({
				username : 'login'	
			})	
		}
		
	}

	render () {
		return (
			<div className='nav'>
				<nav className='nav-pages'>
					<div className='nav-pages-logo'>
						<img src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>	
					</div>
					<div className='nav-pages-list'>
						<ul>
							<li>News</li>
							<li>Subscribe</li>
							<li>Courses</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className='clearfix'></div>
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
						<i className="lni-search size-sm"></i>
					</div>
					<input className='form-seach-text' type="text" name='search'/>
				</form>
				<div className='clearfix'></div>
			</div>	
		)
	}
}

export default Nav