import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavButtons extends Component {

    render() {
        return([
            <span className='nav-btn nav-btn--call' key={1} onClick={this.props.callTo}>
                <i className="fa fa-phone"></i>
                <span className="nav-btn__legend">Ligar</span>
            </span>,

            <Link className='nav-btn nav-btn--services' key={2} to={`/servico/${this.props.moveTo}`}>
                <i className="fa fa-diamond"></i>
                <span className="nav-btn__legend">Serviços</span>
            </Link>,

            <span className='nav-btn nav-btn--adress' key={3} onClick={this.props.scrollTo}>
                <i className="fa fa-map-marker"></i>
                <span className="nav-btn__legend">Endereço</span>
            </span>,

            <span className='nav-btn nav-btn--comentary' key={4} onClick={this.props.lightBox}>
                <i className="fa fa-comments"></i>
                <span className="nav-btn__legend">Comentários</span>
            </span>,

            <span className='nav-btn nav-btn--favorite' key={5}>
                <i className="fa fa-star"></i>
                <span className="nav-btn__legend">Favoritos</span>
            </span>
        ])
    }
}

export default NavButtons
