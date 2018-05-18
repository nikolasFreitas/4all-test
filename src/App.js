import React, { Component } from 'react';
import './Assets/css/general.css';
import Home from './Scenes/Home/Home';
import Index from './Scenes/Index/Index'
import Service from './Scenes/Service/Service';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'exact strict render={(propsIndex) => <Index {...propsIndex} />}/>
                    <Route path='/home/:id'exact strict render={(propsHome) => <Home {...propsHome} />}/>
                    <Route path='/servico/:id'exact strict render={(propsService) => <Service {...propsService} />}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
