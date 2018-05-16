import React, {Component} from 'react';

class Comments extends Component{

    render() {
        return(
            <div className="comment-box">
                <span className="comment-box__image-box">
                    <img src={this.props.imageSrc} />
                </span>

                <span className="comment-box__info">
                    <div className="infro__box">
                        <p className="comment-name">{this.props.name}</p>
                        <p className="comment-title">{this.props.title}</p>
                    </div>

                    <div className="infro__box">
                        <p className="rate-box">
                            {(
                                () => {
                                    for (var i = 0; i < this.props.rate; i++) {
                                        return(<i key={i} className="fa fa-star" aria-hidden="true"></i>)
                                    }
                                }
                            )()}
                        </p>
                    </div>
                </span>

                {this.props.comment}
            </div>
        )
    }
}

export default Comments
