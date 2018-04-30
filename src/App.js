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
            <Router>
                <div className="AppFontFamily">
                    <Route exact path="/" component={Home} />
                    <Route path="/platform" component={Platform} />  
                </div>
            </Router>
        );
    }
}