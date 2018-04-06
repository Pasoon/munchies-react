import React, { Component } from 'react';
import RestaurantCard from './restaurant-card.jsx';
import {Grid, Row, Col} from 'react-bootstrap'

export default class Results extends Component {
        constructor(props){
            super(props);
        }
        render() {
            return (
                <div>
                {this.props.results.map((result,i) =>{
                    return(
                    <div key = {i} className="restaurantCard">
                        <h1>{this.props.restaurant.name}</h1>
                        <h2>{this.props.restaurant.type}</h2>
                    </div>
                    )
                })}
                </div>
                )
        }
}

