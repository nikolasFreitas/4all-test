import React, { Component } from 'react';
import IdFetch from '../../Services/Webservice/4allHost/Id-consult.jsx';

class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            options : {},
            clickedId : null,
            received : false,
            response : false
        }
    }

    componentDidMount() {
        IdFetch()
            .then( data => {
                if (data) {
                    this.setState({
                        received : true,
                        response : true,
                        options : data
                    });
                } else {                    
                    this.setState({
                        received : true
                    })
                }
            });
    }

    render() {
        if (this.state.received) {
            if (this.state.response) {
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
                return (
                    <div className="container container--middle">
                        <h1> Infelizmente não foi possível conectar ao nosso servidor</h1>
                    </div>
                )
            }
        } else {
            return(
                <div className="container container--middle">
                    <h1> Buscando informação do servidor</h1>
                </div>
            );
         }
    }
}

export default Index;
