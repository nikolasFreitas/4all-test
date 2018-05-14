import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className='header'>
                <div className='backward-icon'> </div>
                <div className='header-place'>
                    <span className='place-icon'></span>
                    <span className='localization'>{this.props.placeName}</span>
                </div>
                <div className='search-icon'> </div>
            </header>
            )
    }
}

export default Header
