import React from 'react';
import CourseCard from './CourseCard';

const Courses = () => {
	return (
		<div id='courses'>
			<div className='course-panel'>
				<CourseCard/>
				<CourseCard/>
				<CourseCard/>
				<CourseCard/>
			</div>
		</div>
	)
}

export default Courses