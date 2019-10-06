import React from 'react';
import Featured from './Featured'
import NewsCard from './NewsCard'
import NewsMore from './NewsMore'

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