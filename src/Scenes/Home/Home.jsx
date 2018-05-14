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
                            <span className='nav-btn nav-btn--call'></span>
                            <span className='nav-btn nav-btn--services'></span>
                            <span className='nav-btn nav-btn--adress'></span>
                            <span className='nav-btn nav-btn--comentary'></span>
                            <span className='nav-btn nav-btn--favorite'></span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;
