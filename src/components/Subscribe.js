import React, {Component} from 'react';


class Subscribe extends Component{
	constructor (){
		super()
		this.subscribeDiv = React.createRef();
	}

	
	userSubscribed = (e) => {
		e.preventDefault();
	 	
	 	
	 	const subscribeDiv = this.subscribeDiv.current;
	 	subscribeDiv.classList.add('inProcess');

	 	setTimeout(function() {
	 		subscribeDiv.classList.add('processed');
	 		subscribeDiv.firstChild.innerHTML = 'You are subscribed!';
	 		
	 	}, 900);
	 	
	 	
	}

	render () {
		return (
			<div id='subscribe' ref={this.subscribeDiv}>
			
				<h1>Subscribe</h1>
				<hr/>
				<p>Be the first to get all the information</p>

				<form onSubmit={this.userSubscribed}>
					<input type="email" placeholder="yourname@you.com" id='subscribeInput'/>
				</form>
			
			</div>
		)	
	}
	
}

export default Subscribe