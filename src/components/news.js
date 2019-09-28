import React from 'react';

const News = () => {
	return (
		<div id="news">
			<div className='news-panel'>
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
							<i class="lni-arrow-right-circle"></i>
						</div>
						<div className="clearfix"></div>
					</div>

				</div>
				
				<div className='news-card'>
					<div>
						<small>Jan</small>
						<p>1</p>
						<small>2019</small>
					</div>
					<h2>Title</h2>
					<div>
						arrow
					</div>
				</div>
				
				<div className='news-more'>
					<h2>Title</h2>
					<div>
						arrow
					</div>
				</div>
			</div>
		</div>
	)
}

export default News