import React, {Component} from 'react'


const heroImages = [
	'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
	'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg'

]
const firstBackground = {
	backgroundImage: `url(${heroImages[0]})`
}
const secondBackground = {
	backgroundImage: `url(${heroImages[1]})`
}

class HeroImage extends Component {
	constructor () {
		super()
		this.state = {
			visible:0
		} 
	}

	componentDidMount () {
		for (var i = 0; i < heroImages.length; i++) {
			((i) => {
	            setTimeout(() => {
	            	this.setState({
	            		visible: i
      				});
	            }, 5000 );
	        })(i);
	    }
	}



	render () {
		return (
			<div className='heroContent-heroImages'>
				<div className='heroContent-heroImages-imagesContainer'>
					
					<div className='heroContent-heroImages-imagesContainer-index'>
						{heroImages.map(heroImage => 
							<img src={heroImage} />
						)}
					</div>

					{heroImages.map((heroImage, i) => {
						{if (i === this.state.visible) {
							return <div className='heroContent-heroImages-imagesContainer-background' 
								style ={ { backgroundImage: "url("+heroImage+")" } }>
							</div>	
						}}
					})}

				</div>
				
				{/* 
					https://dribbble.com/shots/3555837-Nat-Geo-Landing-Page 
					Remove the second image from array line 36


				*/}

			</div>
		);
	}
}

export default HeroImage