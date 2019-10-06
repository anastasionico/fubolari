import React from 'react'

const NewsCard = () => {
	return (
		<div className='news-card'>
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

export default NewsCard