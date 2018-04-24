import React from 'react';
import { Carousel } from 'antd';
import './Home.less';

//
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerImgs: [{
				key: 1,
				url: "https://weiquaninfo.cn/images/wxApp.jpg"
			}, {
				key: 2,
				url: "https://weiquaninfo.cn/images/wxAccount.jpg"
			}]
		}
	}

	//
	render() {
		return (
			<div className="HomePageStyle">
				<Carousel className="HomePageCarousel"
					autoplay={true}
					autoplaySpeed={5000}
				>
					{
						this.state.bannerImgs.map((item)=>{
							return <div key={item.key}>
								<img src={item.url} 
									style={{width: '100%', height: 600}}
								/>
							</div>
						})
					}
				</Carousel>
				<div className="HomePageFooter">
					abc
				</div>
			</div>
		);
	}
}