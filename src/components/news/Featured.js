import React, {Component} from 'react'

class Featured extends Component {
	constructor () {
		super()
		this.featuredDiv = React.createRef()
	}

	render () {
		return (
			<div className='news-featured'>
				<div className='news-featured-header'>
					<h1>Reaching out to 240 vulnerable ...</h1>
					<h3>Reaching out to 240 vulnerable Londoners through the Young Londoners Fund</h3>

					<ul className='news-featured-social'>
						<li><i className="lni-facebook-filled"></i></li>
						<li><i className="lni-instagram-filled"></i></li>
						<li><i className="lni-linkedin-filled"></i></li>
					</ul>
				</div>

				<div className='news-featured-footer'>
					<div className='news-featured-footer-date'>
						<small>Jan</small>
						<p>1</p>
						<small>2019</small>
					</div>

					<div className='news-featured-footer-link'>
						<i className="lni-arrow-right-circle"></i>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		)
	}
}

export default Featured