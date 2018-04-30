import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import './App.less';
import Home from './pages/Home/Home';
import Platform from './pages/Platform/Platform';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="AppFontFamily">
				<Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/platform" component={Platform} />  
				</Router>
            </div>
        );
    }
}