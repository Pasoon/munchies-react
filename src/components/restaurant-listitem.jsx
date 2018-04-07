import React, {Component} from 'react';

export default class RestaurantListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        
        console.log("LETS GOOOO!: "+this.props.restaurant.name);
        return (
            <div className="restaurantListItem">
                <h2>{this.props.restaurant.name}</h2>
                <h5>{this.props.restaurant.type}</h5>
                <h5>{this.props.restaurant.overallRating}</h5>
                <h5>{this.props.restaurant.url}</h5>

            </div>
        )
    }
}