import React, { Component } from 'react'
import Nav from './Nav'
import HeroContent from './HeroContent'

class Hero extends Component {
	render () {	
		return (
			<div id="hero">
				<Nav/>
				<HeroContent/>
			</div>	
		)
	}
}

export default Hero