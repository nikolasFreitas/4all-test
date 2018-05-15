import React, {Component} from 'react';

class NavButtons extends Component {

    render() {
        return(
            <span className={`nav-btn ${this.props.btnClass}`} onClick={this.props.handleClick}>
                {this.props.children}
            </span>
        )
    }
}

export default NavButtons
