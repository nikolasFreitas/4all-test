import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className='header'>
                <div className='header-icon header-icon--backward'> </div>
                <div className='header-place'>
                    <span className='header-place__place-icon'><i className="fa fa-map-marker"></i></span>
                    <span className='localization'>{this.props.placeName}</span>
                </div>
                <div className='header-icon header-icon--search'> </div>
            </header>
            )
    }
}

export default Header
