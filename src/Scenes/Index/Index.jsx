import React, { Component } from 'react';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div className="container container--middle">
                <h1>Escolha uma das opções</h1>
                <ul className="list list--vertical list--user-id">
                    <li className="list-item list-item--user-id">place holder</li>
                    <li className="list-item list-item--user-id">place holder</li>
                    <li className="list-item list-item--user-id">place holder</li>
                    <li className="list-item list-item--user-id">place holder</li>
                </ul>
            </div>

        );
    }
}

export default Index;
