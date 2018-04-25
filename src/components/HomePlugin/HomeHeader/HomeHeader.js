import React from 'react';
import './HomeHeader.less';
import { Menu, Button } from 'antd';
import { withRouter } from 'react-router';

// const
const contentWidth = 1200;
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;

//
class HomeHeader extends React.Component {
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

	// 点击菜单事件
	menuItemClick({ item, key, keyPath }) {
		switch (key) {
			case "home":
				this.props.history.push('/');
				break;
			case "wxAccount":
				console.log("wxAccount");
				break;
			case "wxMiniApp":
				console.log("wxMiniApp");
				break;
			default:
				break;
		}
	}

	// 微信公众平台登录
	wxAccountLogin() {
		console.log("login");
	}

	//
	render() {
		return (
			<div className="HomeHeaderStyle">
				<div className="HomeHeaderArea"
					style={{paddingLeft: this.state.contentPaddingLR, 
					paddingRight: this.state.contentPaddingLR, width: '100%'}}
				>
					<div className="leftArea">
						<div className="logoArea">
							<img src="https://weiquaninfo.cn/images/homepage/homepage_logo.png"
								alt="logo" style={{width: '100%', height: '100%'}} 
							/>
						</div>
						<div className="menuArea">
							<Menu mode="horizontal" theme="dark"
								className="MenuAreaCtrl"
								onClick={this.menuItemClick.bind(this)}
								defaultSelectedKeys={["home"]}
							>
								<Item key="home" className="MenuItemStyle">
									首页
								</Item>
								<SubMenu className="subMenuStyle"
									title={<span>微信开发</span>}>
									<Item className="subMenuItem" key="wxAccount">微信公众号</Item>
									<Item className="subMenuItem" key="wxMiniApp">微信小程序</Item>
								</SubMenu>
							</Menu>
						</div>
					</div>
					<div className="rightArea">
						<Button ghost icon="wechat"
							onClick={this.wxAccountLogin.bind(this)}
						>
							微信公众平台登录
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(HomeHeader);