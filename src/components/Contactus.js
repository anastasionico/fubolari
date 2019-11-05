import React, {Component} from 'react';

class Contactus extends Component {
	constructor () {
		super()
		this.responseDiv = React.createRef()
		this.contactPanel = React.createRef()
		this.responseMessage = this.responseMessage.bind(this);
	}

	componentDidMount = () => {
	}

	responseMessage = (e) => {
		e.preventDefault()
		
		const contactPanel = this.contactPanel.current;
		contactPanel.classList.add('hidden')



		const responseDiv = this.responseDiv.current;
		responseDiv.classList.add('active')
		

		
	}

	render (){
		return (
			<React.Fragment>
				<div id='contactus'>
					<div className='contact-panel' ref={this.contactPanel}>
						<form onSubmit={this.responseMessage}>
							<input type='email' placeholder='Insert your email' value='a@a.com'/>
							<input type='subject' placeholder='Insert the subject' value='a@a.com'/>
							<textarea defaultValue="Insert your message"/>

							<div className='contact-panel-link'>
								<button type="submit">
									<i className="lni-arrow-right-circle"></i>
								</button>	
							</div>
						</form>
					</div>
					<div id='responseDiv' ref={this.responseDiv}>
						<h1>this is a successfull response message</h1>
					</div>
				</div>
				
			</React.Fragment>
		)
		
	}
}


export default Contactus 