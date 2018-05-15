import React, {Component} from 'react';

import Header from '../../Components/Layout/Header/Header.jsx';
import NavButtons from '../../Components/Buttons/Nav-buttons.jsx';

import placeFetch from '../../Services/Webservice/4allHost/Place-consult.jsx';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            received : false,
            response : false,
            placeInfo : {},
        }
    }

    componentDidMount() {
        placeFetch({
            id: this.props.id
        })
            .then(data => {
                if (data) {
                    this.setState({
                        placeInfo : data,
                        received : true,
                        response : true
                    });
                } else {
                    this.setState({
                        received : true
                    })
                }
            })
    }

    render() {
        const received = this.state.received;
        const response = this.state.response;

        return(
            <div className='container'>
                <Header placeName='Porto Alegre, RS'/>

                <section className='home-image-box'>
                    {(
                        () => {
                            if (!received && !response) {
                                return(<h1 className="waiting-data">Aguardando o servidor</h1>)
                            } else if(received && !response) {
                                return(<h1 className="reject-text">Sinto muito, não foi possível obter a imagem</h1>)
                            }
                        }
                    )()}
                    <div className="favorite-icon"><i className="fa fa-star"></i></div>
                </section>

                <section>
                    <h2>Lorem</h2>
                    
                    <div className="content-box">
                        <div className='tool-box'>
                            <NavButtons btnClass='nav-btn--call'>
                                <i className="fa fa-phone"></i>
                                <span className="nav-btn__legend">Ligar</span>
                            </NavButtons>

                            <NavButtons btnClass='nav-btn--services'>
                                <i className="fa fa-diamond"></i>
                                <span className="nav-btn__legend">Serviços</span>
                            </NavButtons>

                            <NavButtons btnClass='nav-btn--adress'>
                                <i className="fa fa-map-marker"></i>
                                <span className="nav-btn__legend">Endereço</span>
                            </NavButtons>

                            <NavButtons btnClass='nav-btn--comentary'>
                                <i className="fa fa-comments"></i>
                                <span className="nav-btn__legend">Comentários</span>
                            </NavButtons>

                            <NavButtons btnClass='nav-btn--favorite'>
                                <i className="fa fa-star"></i>
                                <span className="nav-btn__legend">Favoritos</span>
                            </NavButtons>
                        </div>

                        <hr/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini,</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
