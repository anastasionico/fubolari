import React from 'react';

const Contactus = () => {
	return (
		<div id='contactus'>
			<div className='contact-panel'>
				<form>
					<input type='email' placeholder='Insert your email'/>
					<input type='subject' placeholder='Insert the subject'/>
					<textarea>Insert your message</textarea>

					<div className='contact-panel-link'>
						<button type="submit">
							<i className="lni-arrow-right-circle"></i>
						</button>	
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contactus