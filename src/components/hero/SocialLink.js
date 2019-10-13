import React ,{Component} from 'react'

class SocialLink extends Component{
	constructor () {
		super()

		this.navRef = React.createRef()
		this.state = {
			'status': 'hidden'
		}

    
	}

	componentDidMount () {
		setTimeout (
			() => {
				this.changeVisibility()
			}, 1000
		);
	}


	changeVisibility = () => {
		const listItems = this.navRef.current.firstChild.children 	
		for (var i = 0; i < listItems.length; i++) {
			(function (i) {
	            setTimeout(function () {
	            	listItems[i].className = ''
	            }, 500 * i);
	        })(i);
	    }
	}

	
	render () {
		return (
			<nav className='heroContent-social' ref={this.navRef}>
				<ul>
					<li className={this.state.status}><i className="lni-facebook-filled "></i></li>
					<li className={this.state.status}><i className="lni-instagram-filled"></i></li>
					<li className={this.state.status}><i className="lni-linkedin-filled"></i></li>
				</ul>
			</nav>	
		);
	}
}

export default SocialLink

// I need to create a SocialLink class that set the status of all elements to invisible
// When the Component loads start a timeout function that after a few second trigger
// a timeinterval function that set the elements as visible
