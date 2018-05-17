import React, { Component } from 'react';
import './Assets/css/general.css';
import Home from './Scenes/Home/Home';
import Index from './Scenes/Index/Index'

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';





class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'exact strict render={(props) => <Index {...props} />}/>
                    <Route path='/home/:id'exact strict render={(props) => <Home {...props} />}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
