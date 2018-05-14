import React, {Component} from 'react';

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
            <div>
                <h1>Home here!</h1>
            </div>
            )
    }
}

export default Home;
