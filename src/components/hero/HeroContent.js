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


// I need to create a heroContent-social component that get the state of visibility hidden 
// once the component mount use setTimeout to load a timer of 2 second 
// then trigger setInterval that will loop amont the li tag and chage the visibility