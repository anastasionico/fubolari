import React, {Component} from 'react';
import Featured from './Featured'
import NewsCard from './NewsCard'
import NewsMore from './NewsMore'

class News extends Component{
	constructor () {
		super()
		this.newsItems = [0,1,2,3]	
	}
	

	render () {
		return (
			<div id="news">
				<div className='news-panel'>

					{this.newsItems.map((newsItem, i)=>{
						if(i === 0) {
							return <Featured/>		
						} else {
							return <NewsCard/>
						}
						
					})}

					<NewsMore/>

				</div>
			</div>
		)
	}
}

export default News