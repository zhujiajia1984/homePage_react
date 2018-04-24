import React from 'react';
import { Carousel } from 'antd';
import './Home.less';
import HomeHeader from '../../components/HomePlugin/HomeHeader/HomeHeader';

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
				<HomeHeader></HomeHeader>
				<Carousel className="HomePageCarousel"
					autoplay={true}
					autoplaySpeed={5000}
				>
					{
						this.state.bannerImgs.map((item)=>{
							return <div key={item.key} className="bannerImgSize">
								<img src={item.url} />
							</div>
						})
					}
				</Carousel>
			</div>
		);
	}
}