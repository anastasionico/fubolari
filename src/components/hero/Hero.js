import React, { Component } from 'react'
import Nav from './Nav'
import HeroContent from './HeroContent'

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
				<Nav username={this.state.username}/>
				<HeroContent/>
			</div>	
		)
	}
}

export default Hero