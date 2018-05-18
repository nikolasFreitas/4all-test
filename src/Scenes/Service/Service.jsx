import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Service extends Component {
    constructor(props) {
        super(props);

        this.state = {
            link : '/'
        }
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            this.setState({
                link: `/home/${this.props.match.params.id}`
            });
        }
    }

    render(){
        return (
            <div className="container">
                <h1>Tela de serviço</h1>
                <NavLink to={this.state.link}>
                    <h2>Volte para a Home aqui</h2>
                </NavLink>
            </div>
        )
    };
}

export default Service
