import React, { Component } from 'react';

export default class RestaurantCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(!this.props.restaurant){
              return(<div className="restaurantCard loading">
                  Loading .......
                  </div>
              )
        }
        return (
            <div className="restaurantCard">
                <h1>{this.props.restaurant.name}</h1>
                <h2>{this.props.restaurant.type}</h2>
            </div>
            )
    }
}