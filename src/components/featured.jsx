import React, {Component} from 'react';
import RestaurantCard from './restaurant-card.jsx';
import {Grid, Row, Col} from 'react-bootstrap'

export default class Featured extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
            pictures: [
                "https://brooksburger.com/images/bg5.jpg", "https://du7ybees82p4m.cloudfront.net/589dea2e769562.76756712.jpg?width=910&heigh" +
                        "t=512",
                "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNjIwIl0/Mid" +
                        "dle-Eastern-Shakshuka-CMS.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWDbyPSOnPXp2SdcCTpT1xSJA" +
                        "Dv9iG-gdLk5SRGRJvqH5Z6nmqA",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsSCABrx-_pqhuGHrygA4DEqC" +
                        "KPTzb-gXWsmKK0d6QIW_vDC5",
                "https://i.ndtvimg.com/i/2017-01/chicken-620x350_620x350_81483960113.jpg"
            ]
        }
        // this.checkResource = this.checkResource.bind(this);
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/restaurants/limit=8').then(results => {
            return results.json();
        }).then(data => {
            let restaurants = data
                .items
                .map((item) => {
                    if (!item.pic_url || this.checkResource(item.pic_url)) {
                        let x = Math.floor(Math.random() * 6);
                        item.pic_url = this.state.pictures[x];
                    }
                    return ({name: item.name, type: item.type, overallRating: item.overallRating, url: item.url, pic_url: item.pic_url})
                })
            this.setState({restaurants: restaurants});
        })
    }

    checkResource(url) {
        console.log("IN CHECK RESOURCE");
        var req = new XMLHttpRequest();
        req.open('HEAD', url, true);
        req.send();
        if (req.status === 404) {
            console.log("THIS URL IS AIDS: "+url);
            return true;
        }
        if (req.status === 403) {
            console.log("THIS URL IS AIDS: "+url);
            return true;
        }
    }

    render() {
        return (
            <section className="featuredSection">
                <div className="featuredHeader">
                    <h1>Featured Restaurants</h1>
                    <p>There's always something to eat.</p>
                </div>
                <div className="featuredRow">
                    <RestaurantCard restaurant={this.state.restaurants[0]}/>
                    <RestaurantCard restaurant={this.state.restaurants[1]}/>
                    <RestaurantCard restaurant={this.state.restaurants[2]}/>
                    <RestaurantCard restaurant={this.state.restaurants[3]}/>
                    <RestaurantCard restaurant={this.state.restaurants[4]}/>
                    <RestaurantCard restaurant={this.state.restaurants[5]}/>
                    <RestaurantCard restaurant={this.state.restaurants[6]}/>
                    <RestaurantCard restaurant={this.state.restaurants[7]}/>
                </div>
            </section>
        )
    }
}
