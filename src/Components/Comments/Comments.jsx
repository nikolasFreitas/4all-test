import React, {Component} from 'react';

class Comments extends Component{

    render() {
        const rate = rateAsArray(this.props.rate);
        return(
            <div className="comment-box">
                <span className="comment-box__image-box">
                    <img src={this.props.imageSrc} alt="Imagem da cidade"/>
                </span>

                <span className="comment-box__info">
                    <div className="info__box">
                        <p className="comment-name">{this.props.name}</p>
                        <p className="comment-title">{this.props.title}</p>
                    </div>

                    <div className="info__box">
                        <p className="rate-box">
                            {
                                rate.map(oneRate => {
                                    return(oneRate)
                                })
                            }
                        </p>
                    </div>
                </span>

                {this.props.comment}
            </div>
        )
    }
}

const rateAsArray = (qtd) => {
    const elements = [];

    for (var i = 0; i < qtd; i++) {
        elements.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>)
    }

    return elements
}

export default Comments
