import React, {Component} from 'react';
import Rating from 'react-rating';

export default class RestaurantCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    }
    render() {
        if (!this.props.restaurant) {
            return (
                <div className="restaurantCard loading">
                    Loading .......
                </div>
            )
        }
        console.log(this.props.restaurant)
        let url = (this.props.restaurant.pic_url !== ''
            ? `url(${this.props.restaurant.pic_url})`
            : '');
        var styles = {
            backgroundImage: `linear-gradient( to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), ` + url,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }
        return (
            <div className="restaurantCard" onClick={this.handleClick} style={styles}>
                <div className="restaurantCard-info">
                    <h1>{this.props.restaurant.name}</h1>
                    <h2>{this.props.restaurant.type}</h2>
                    <Rating
                        emptySymbol="glyphicon glyphicon-star-empty"
                        fullSymbol="glyphicon glyphicon-star"
                        initialRating={this.props.restaurant.overallRating}
                        readonly/>
                </div>
            </div>
        )
    }
}
