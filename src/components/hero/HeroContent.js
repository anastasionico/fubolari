
import React from 'react'
import SocialLink from './SocialLink'

import React, {Component} from 'react'


const socialLinks = [
	"lni-facebook-filled",
	"lni-instagram-filled",
	"lni-linkedin-filled"
]
const socialLinksList = socialLinks.map(link => <li><i className={link}></i></li>)

class HeroContent extends Component {
	constructor(){
		super()
		this.state = {
			visibility : 'hidden'
		}
	}
	
    render () {
        return (
            <div className='heroContent'>
			<div className='heroContent-images'>
				<img src='https://images.pexels.com/photos/2065820/pexels-photo-2065820.jpeg'/>	
			</div>


			<SocialLink/>

			<nav className='heroContent-social'>
				<ul>
					<li class={this.state.visibility}><i className={"lni-facebook-filled"}></i></li>
					<li class={this.state.visibility}><i className={"lni-instagram-filled"}></i></li>
					<li class={this.state.visibility}><i className={"lni-linkedin-filled"}></i></li>
					{/* { socialLinksList } */}
				</ul>
			</nav>	


			<div className='clearfix'></div>
		</div>
        );
    }
}

export default HeroContent