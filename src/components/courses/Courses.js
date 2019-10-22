import React from 'react';
import CourseCard from './CourseCard';


const coursesList = [
	[
		'Computer Science',
		'a',
	],
	[
		'History',
		'a',
	],
	[
		'Advertising',
		'a',
	],
	[
		'Communication',
		'a',
	]
];



const Courses = () => { 
	return (
		<div id='courses'>
			<div className='course-panel'>
				{coursesList.map((courseList) => {
					console.log(courseList)
					return <CourseCard name={courseList[0]} image={courseList[1]}/>	

				})}

				
				
			</div>
		</div>
	)
}

export default Courses