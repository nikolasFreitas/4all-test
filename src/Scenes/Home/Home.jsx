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
                            </span>

                            <span className='nav-btn nav-btn--services'>
                                <i className="fa fa-diamond"></i>
                            </span>

                            <span className='nav-btn nav-btn--adress'>
                                <i className="fa fa-map-marker"></i>
                            </span>

                            <span className='nav-btn nav-btn--comentary'>
                                <i className="fa fa-comments"></i>
                            </span>

                            <span className='nav-btn nav-btn--favorite'>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>

                        <hr/>


                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
