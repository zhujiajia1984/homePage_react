import React from 'react';
import { Route } from 'react-router-dom';
import WxAccount from './wxAccount/WxAccount';

export default class Platform extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
				<span>platform</span>
				<Route path={this.props.match.url + '/wxAccount'} component={WxAccount}/>
            </div>
        );
    }
}