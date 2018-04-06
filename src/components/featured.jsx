import React, {Component} from 'react';
import RestaurantCard from './restaurant-card.jsx';
import {Grid, Row, Col} from 'react-bootstrap'

export default class Featured extends Component {

    constructor() {
        super();
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/restaurants').then(results => {
            return results.json();
        }).then(data => {
            let restaurants = data
                .items
                .map((item) => {
                    return ({name: item.name, type: item.type, overallRating: item.overallRating, url: "https://brooksburger.com/images/bg5.jpg"})
                })
            this.setState({restaurants: restaurants});
            console.log(this.state.restaurants);
        })
    }

    render() {
        return (
            <section className="featuredSection">
                <div></div>
                <div className="featuredRow">
                    <RestaurantCard restaurant={this.state.restaurants[0]}/>
                    <RestaurantCard restaurant={this.state.restaurants[1]}/>
                    <RestaurantCard restaurant={this.state.restaurants[2]}/>
                    <RestaurantCard restaurant={this.state.restaurants[3]}/>
                </div>
            </section>
        )
    }
}
