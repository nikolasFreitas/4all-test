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
                    <div className="favorite-icon"></div>
                </section>
                <h2>Lorem</h2>
            </div>
            )
    }
}

export default Home;
