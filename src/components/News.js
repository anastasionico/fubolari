import React from 'react';
import Featured from './news/Featured'
import NewsCard from './news/NewsCard'
import NewsMore from './news/NewsMore'

const News = () => {
	return (
		<div id="news">
			<div className='news-panel'>
				<Featured/>
				
				<NewsCard/>
				<NewsCard/>
				<NewsCard/>

				<NewsMore/>

			</div>
		</div>
	)
}

export default News