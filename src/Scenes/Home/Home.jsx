import React, {Component} from 'react';
import Header from '../../Components/Layout/Header/Header.jsx';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            received : false,
            response : false,
            userInfo : {},
        }
    }

    render() {
        return(
            <div className='container'>
                <Header placeName='Porto Alegre, RS'/>

                <section className='home-image-box'>
                    <div className="favorite-icon"><i className="fa fa-star"></i></div>
                </section>

                <section>
                    <h2>Lorem</h2>
                    <div className="content-box">
                        <div className='tool-box'>
                            <span className='nav-btn nav-btn--call'>
                                <i className="fa fa-phone"></i>
                                <span className="nav-btn__legend">Ligar</span>
                            </span>

                            <span className='nav-btn nav-btn--services'>
                                <i className="fa fa-diamond"></i>
                                <span className="nav-btn__legend">Serviços</span>
                            </span>

                            <span className='nav-btn nav-btn--adress'>
                                <i className="fa fa-map-marker"></i>
                                <span className="nav-btn__legend">Endereço</span>
                            </span>

                            <span className='nav-btn nav-btn--comentary'>
                                <i className="fa fa-comments"></i>
                                <span className="nav-btn__legend">Comentários</span>
                            </span>

                            <span className='nav-btn nav-btn--favorite'>
                                <i className="fa fa-star"></i>
                                <span className="nav-btn__legend">Favoritos</span>
                            </span>
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
