import React, {Component} from 'react'


const heroImages = [
	'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
	'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg',
	'https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg',
	'https://upload.wikimedia.org/wikipedia/commons/8/89/Los_Angeles%2C_Winter_2016.jpg'

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
				}, 10000 * i);
			})(i);
			
	    }
	}



	render () {
		return (
			<div className='heroContent-heroImages'>
				<div className='heroContent-heroImages-imagesContainer'>
					
					<div className='heroContent-heroImages-imagesContainer-index'>
						{/*<p className='heroContent-heroImages-imagesContainer-index-legenda'>{this.state.visible+1} / {heroImages.length}</p>*/}
						{heroImages.map((heroImage, i) => {
							{if (i === this.state.visible) {
								return <img className={"b-red"} src={heroImage} />	
							}else{
								return <img src={heroImage} />	
							}} 
							
						})}


					</div>

					{heroImages.map((heroImage, i) => {
						{if (i > this.state.visible) {
							return <div className='heroContent-heroImages-imagesContainer-background' 
								style ={ { backgroundImage: "url("+heroImage+")" } }>
							</div>	
						} if (i === this.state.visible) {
							return <div className='heroContent-heroImages-imagesContainer-background visible' 
								style ={ { backgroundImage: "url("+heroImage+")" } }>
							</div>	
						} else {
							return <div className='heroContent-heroImages-imagesContainer-background passed' 
								style ={ { backgroundImage: "url("+heroImage+")" } }>
							</div>	
						}
					}} ) }

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