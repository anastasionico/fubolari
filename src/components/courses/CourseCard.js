import React from 'react'



const CourseCard = (props) => {
	return (

		// add the background here
		<div className='course-card' style={{
			backgroundImage: `url(${props.image})`
   

}}>
			<h2>{props.name}</h2>
			<div className='course-card-link'>
				<i className="lni-arrow-right-circle"></i>
			</div>
		</div>
	)
}

export default CourseCard