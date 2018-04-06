import React, { Component } from 'react';
import RestaurantCard from './restaurant-card.jsx';
import {Grid, Row, Col} from 'react-bootstrap'

export default class Featured extends Component {

    constructor() {
        super();
        this.state = {
            restaurants :[],
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/restaurants')
        .then(results => {
            return results.json();
        }).then(data => {
            let restaurants = data.items.map((item) => {
                return (
                    {
                        name: item.name,
                        type: item.type,
                        overallRating: item.overallRating,
                        url: item.url
                    }
                )
            })
            this.setState({restaurants: restaurants});
            console.log(this.state.restaurants);
        })
    }

    render() {
        return (
            <Grid>
               <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="resto-wrapper">
                    <RestaurantCard restaurant = {this.state.restaurants[0]}/>
                    </Col>
                    <Col xs={12} sm={4} className="resto-wrapper">
                      <RestaurantCard restaurant = {this.state.restaurants[1]}/>
                    </Col>
                    <Col xs={12} sm={4} className="resto-wrapper">
                      <RestaurantCard restaurant = {this.state.restaurants[2]}/>
                    </Col>
                </Row> 
            </Grid>
        )
    }
}
