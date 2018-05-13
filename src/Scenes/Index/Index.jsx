import React, { Component } from 'react';
import IdFetch from '../../Services/Webservice/4allHost/Id-consult.jsx';

class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            options : {},
            clickedId : null,
            received : false,
        }
    }

    componentDidMount() {
        IdFetch().then(([data]) => {
            this.setState({
                received : true,
                options : data
            });
        });
    }

    render() {
         if (this.state.received) {
            return(
                <div className="container container--middle">
                    <h1>Escolha uma das opções</h1>
                    <ul className="list list--vertical list--user-id">
                        {
                            this.state.options.lista.map((option, index) => {
                                return (
                                    <li className="list-item list-item--user-id" key={index}>{option}</li>
                                )
                            })
                        }
                    </ul>
                 </div>

            )
         } else {
            return(
                <div className="container container--middle">
                    <h1> Aguardando receber informação</h1>
                </div>
            );
         }
    }
}

export default Index;
