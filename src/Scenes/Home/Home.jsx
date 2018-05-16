import React, {Component} from 'react';

import Header from '../../Components/Layout/Header/Header.jsx';
import NavButtons from '../../Components/Buttons/Nav-buttons.jsx';
import GoogleMaps from '../../Components/GoogleMaps/Maps.jsx';

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
        }).then(data => {
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
            });
    }

    render() {
        const received = this.state.received;
        const response = this.state.response;
        const placeInfo = this.state.placeInfo;
        let userAnswear = '';

        if (!received && !response) {
            userAnswear = "Aguardando resposta";
        } else if(received && !response) {
            userAnswear = "Não foi possível se conectar ao servidor";
        }

        return(
            <div className='container'>
                <Header placeName={response ? `${placeInfo.cidade} - ${placeInfo.bairro}` : userAnswear}/>

                <section className='home-image-box'>
                    {(
                        () => {
                            if (!response || !received) {
                                return(<h1 className="waiting-data">{userAnswear}</h1>)
                        }   }
                    )()}

                    <div className="favorite-icon"><i className="fa fa-star"></i></div>
                </section>

                <section>
                    <h2>{response ? placeInfo.titulo : userAnswear}</h2>

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

                        <p>{response ? placeInfo.texto : userAnswear}</p>
                    </div>
                </section>

                <section className="map-box ">
                    <GoogleMaps
                        isMarkerShown= {true}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `200px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        lat={placeInfo.latitude}
                        long={placeInfo.longitude}
                    />
                </section>

                <section className="content-box">
                    
                </section>
            </div>
        )
    }
}

export default Home;
