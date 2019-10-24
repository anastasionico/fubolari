import React from 'react';
import CourseCard from './CourseCard';


const coursesList = [
	[
		'Computer Science',
		'https://miro.medium.com/max/1600/1*QBxc5-QaDrLZV9VPHcqG0Q.png',
	],
	[
		'History',
		'https://payload.cargocollective.com/1/7/231915/13630156/venema4_800.jpg',
	],
	[
		'Advertising',
		'https://previews.123rf.com/images/macrovector/macrovector1805/macrovector180500946/101912265-advertising-agency-concept-with-creative-advertising-work-symbols-isometric-vector-illustration.jpg',
	],
	[
		'Communication',
		'https://cdn.theatlantic.com/assets/media/img/mt/2015/01/shutterstock_208347706-1/lead_720_405.jpg',
	]
];



const Courses = () => { 
	return (
		<div id='courses'>
			<div className='course-panel'>
				{coursesList.map((courseList) => {
					return <CourseCard name={courseList[0]} image={courseList[1]}/>	
				})}

				
				
			</div>
		</div>
	)
}

export default Courses