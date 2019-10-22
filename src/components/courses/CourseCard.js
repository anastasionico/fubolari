import React from 'react'
import { url } from 'inspector'


const CourseCard = (props) => {
	return (
		// add the background here
		<div className='course-card' style={background-image:url({props.image}) } >
			<h2>{props.name}</h2>
			<div className='course-card-link'>
				<i className="lni-arrow-right-circle"></i>
			</div>
		</div>
	)
}

export default CourseCard