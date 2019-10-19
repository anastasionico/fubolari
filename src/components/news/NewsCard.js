import React, {Component} from 'react'

class NewsCard extends Component {
	constructor () {
		super()
		this.newsDiv = React.createRef()
		this.focusNews = this.focusNews.bind(this)
	}

	focusNews = status => {
		if (status) {
			this.newsDiv.current.classList.add('focused')
		} else {
			this.newsDiv.current.classList.remove('focused')
		}
	}


	render () {
		return (
			<div 
				className='news-card'
				ref={this.newsDiv} 
				onMouseOver={this.focusNews.bind(this,1)}
				onMouseOut={this.focusNews.bind(this,0)}
			>
				<div className='news-card-header'>
					<h2>Title</h2>
					<div className='news-card-header-date'>
						<small>Jan</small>
						<p>1</p>
						<small>2019</small>
					</div>
				</div>

				<div className='news-card-footer'>
					<div className='news-card-footer-link'>
						<i className="lni-arrow-right-circle"></i>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsCard