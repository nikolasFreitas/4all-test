import React, { Component } from 'react';
import IdFetch from '../../Services/Webservice/4allHost/Id-consult.jsx';

import { NavLink } from 'react-router-dom';

class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            idTable : {},
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
                        idTable : data
                    });
                } else {
                    this.setState({
                        received : true
                    })
                }
            });
    }

    render() {
        const received = this.state.received;
        const response = this.state.response;
        let userAnswear = 'Escolha uma das opções';

        if (!received && !response) {
            userAnswear = "Aguardando resposta";
        } else if(received && !response) {
            userAnswear = "Não foi possível se conectar ao servidor";
        }

        return(
            <div className="container container--middle">
                <h1>{userAnswear}</h1>
                <ul className="list list--vertical list--user-id">
                {(
                    () => {
                        if (response) {
                            return(
                                this.state.idTable.lista.map((option, index) => {
                                    return (
                                        <NavLink to={`/home/${option}`} className="list-item list-item--user-id" key={index}>{option}</NavLink>
                                    )
                                })
                            )
                        }
                    }
                )()}
                </ul>
            </div>
        )

    }
}

export default Index;
