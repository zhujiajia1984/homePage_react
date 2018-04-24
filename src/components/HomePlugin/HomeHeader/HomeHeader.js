import React from 'react';
import './HomeHeader.less';

// const
const contentWidth = 1200;

//
export default class HomeHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contentPaddingLR: 0, // 顶部左右padding
		}
	}

	// init
	componentDidMount() {
		this.setContentPaddingLR();
		// 绑定事件
		window.addEventListener('resize', this.onWindowResize.bind(this));
	}

	// close
	componentWillUnmount() {
		// 解绑事件
		window.removeEventListener('resize', this.onWindowResize.bind(this));
	}

	// window resize event
	onWindowResize(e) {
		this.setContentPaddingLR();
	}

	// 设置顶部内容的padding
	setContentPaddingLR() {
		let width = document.getElementById('root').clientWidth;
		if (width > contentWidth) {
			let remain = (width - contentWidth) / 2;
			this.setState({ contentPaddingLR: remain });
		} else {
			this.setState({ contentPaddingLR: 0 });
		}
	}

	//
	render() {
		return (
			<div className="HomeHeaderStyle">
				<div style={{paddingLeft: this.state.contentPaddingLR, 
					paddingRight: this.state.contentPaddingLR, width: '100%'}}
				>
					<span>abc</span>
					<span>def</span>
				</div>
			</div>
		);
	}
}