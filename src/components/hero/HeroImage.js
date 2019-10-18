import React, {Component} from 'react'


const heroImages = [
	'https://cdn.shopify.com/s/files/1/0066/5134/7014/products/823adb2c13ac43bd837e5a1e51207cb6_1024x1024@2x.jpg',
	'https://cdn.shopify.com/s/files/1/0066/5134/7014/files/1_634115a3-0e3a-42e2-82f6-3d1f05c4da32_1280x.jpg',
	'https://cdn.shopify.com/s/files/1/0066/5134/7014/products/website_1024x1024@2x.jpg',
	'https://cdn.shopify.com/s/files/1/0066/5134/7014/products/e1721a0b51444933b6f98ff68e82e03a_1024x1024@2x.jpg'
	
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
		this.changeHero = this.changeHero.bind(this);
	}

	componentDidMount () {
		for (var i = 0; i < heroImages.length; i++) {
			((i) => {
	            setTimeout(() => {
	            	this.setState({
	            		visible: i
					  });
				}, 5000 * i);
			})(i);
			
	    }
	}

	changeHero(i) {
		this.setState({
			visible: i
	  	});
	}	

	render () {
		return (
			<div className='heroContent-heroImages'>
				<div className='heroContent-heroImages-imagesContainer'>
					
					<div className='heroContent-heroImages-imagesContainer-index'>
						{/*<p className='heroContent-heroImages-imagesContainer-index-legenda'>{this.state.visible+1} / {heroImages.length}</p>*/}
						{heroImages.map((heroImage, i) => {
							{if (i === this.state.visible) {
								return <img key={heroImage} src={heroImage} className={"b-red"} />	
							}else{
								return <img key={heroImage} src={heroImage} onClick={this.changeHero.bind(this, i)}/>	
							}} 
							
						})}


					</div>

					{heroImages.map((heroImage, i) => {
						{if (i > this.state.visible) {
							return <div key={heroImage} className='heroContent-heroImages-imagesContainer-background' 
								style ={ { backgroundImage: "url("+heroImage+")" } }>
							</div>	
						} if (i === this.state.visible) {
							return <div key={heroImage} className='heroContent-heroImages-imagesContainer-background visible' 
								style ={ { backgroundImage: "url("+heroImage+")" } }>
							</div>	
						} else {
							return <div key={heroImage} className='heroContent-heroImages-imagesContainer-background passed' 
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