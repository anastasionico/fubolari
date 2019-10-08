import React, {Component} from 'react'

class Nav extends Component {
	constructor () {
		super()
		this.state = {
			username : 'Login',
			searchField: false,
			
		}
		this.changeUsername = this.changeUsername.bind(this);
		this.showSearchText = this.showSearchText.bind(this)
	}

	changeUsername() {
		console.log(this.state.username);
		if (this.state.username == 'Login') {
			this.setState({
				username : 'Nico'	
			})	
		} else {
			this.setState({
				username : 'Login'	
			})	
		}
		
	}

	showSearchText() {
		const currentState = this.state.searchField;
		this.setState({ searchField: !currentState });
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
							<button className='btn btn-primary' onClick = {this.changeUsername}>
								{this.state.username}
							</button>
						</li>
						<li>Register</li>
					</ul>
				</nav>
				
				<form className='form-seach'>
					<input 
						id='form-seach-text' 
						type="text" 
						name='search' 
						className={this.state.searchField ? 'active': null}
					/>
					<div className='form-seach-icon circle'>
						<i className="lni-search" onClick={this.showSearchText}></i>
					</div>
				</form>
				<div className='clearfix'></div>
			</div>	
		)
	}
}

export default Nav